import { useQuery, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import ArrowButton from "../../Components/ArrowButton/ArrowButton";
import LoadingSpinner from "../../Components/Loaing/LoadingSpinner/LoadingSpinner";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import ProductMainImage from "../../Components/ProductMainImage/ProductMainImage";
import { fetchData } from "../../Static/Api";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import Dialog from "../../Components/Dialog/Dialog";
import DialogForm from "../../Components/DialogForm/DialogForm";

export default () => {
  const id = useParams().id;
  const { data, isLoading, isFetching } = useQuery(
    "shoeInfo",
    fetchData("OneShoe", id)
  );
  const navigate = useNavigate();

  const [dialog, setDialog] = useState({
    dialog: false,
    updateDialog: false,
    navigate: false,
    loading: false,
  });
  useEffect(() => {
    if (dialog.navigate) {
      navigate("/Shoes");
    }
  }, [dialog]);
  const { mutate: deleteMutation } = useMutation(
    "DeleteElement",
    fetchData("DeleteShoe", id, { method: "DELETE" })
  );
  const param = useRef<any>();
  const { mutate: updateMutation } = useMutation(
    "DUpdateElement",
    fetchData("DeleteShoe", id, {
      method: "PUT",
      body: JSON.stringify({
        name: param.current.titleText,
        image: param.current.imageText,
        Description: param.current.descText,
        price: param.current.price,
      }),
    })
  );
  return (
    <div className="ShoePage">
      {data && <ProductMainImage image={data.image} id={id || ""} />}
      {data && <ProductInfo {...data} />}
      <div style={{ margin: 10, display: "flex" }}>
        <ArrowButton
          icon={<MdDelete size={30} />}
          title="Delete"
          type="Secondary"
          onclick={() => {
            setDialog({ ...dialog, dialog: true });
          }}
        />
        <ArrowButton
          icon={<AiTwotoneEdit size={30} />}
          title="Edit"
          type="Secondary"
          onclick={() => {
            setDialog({
              dialog: false,
              navigate: false,
              loading: false,
              updateDialog: true,
            });
          }}
        />
        {dialog.dialog && (
          <Dialog
            title="Are you sure you want to delete this ?"
            describe="once you delete this you cant undo"
            type="warning2Buttons"
            onRefuse={() => {
              setDialog({
                dialog: false,
                navigate: false,
                loading: false,
                updateDialog: false,
              });
            }}
            onAgree={() => {
              setDialog({ ...dialog, loading: true });
              deleteMutation(undefined, {
                onSuccess() {
                  setDialog({
                    dialog: false,
                    navigate: true,
                    loading: false,
                    updateDialog: false,
                  });
                },
              });
            }}
          />
        )}
        {(dialog.loading || isLoading || isFetching) && (
          <LoadingSpinner type="static" />
        )}
      </div>
      {dialog.updateDialog && data && (
        <DialogForm
          id={id}
          imageLink={data.image}
          price={data.price}
          title={data.name}
          describe={data.Description}
          onAgree={({ titleText, descText, imageText, priceText }) => {
            param.current = { titleText, descText, imageText, priceText };
            setDialog({
              dialog: false,
              navigate: false,
              loading: true,
              updateDialog: false,
            });
            updateMutation(undefined, {
              onSuccess() {
                setDialog({
                  dialog: false,
                  navigate: false,
                  loading: false,
                  updateDialog: false,
                });
              },
            });
          }}
          onRefuse={() => {
            setDialog({
              dialog: false,
              navigate: false,
              loading: false,
              updateDialog: false,
            });
          }}
        />
      )}
    </div>
  );
};
