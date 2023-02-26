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
  const { data, isLoading, isFetching, refetch } = useQuery(
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
    fetchData("DeleteShoe", id, { method: "DELETE" })
  );
  const { mutate: updateMutation } = useMutation((variables: any) => {
    return fetch("https://63f74ea0833c7c9c60810d71.mockapi.io/Shoes/" + id, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: variables.titleText,
        image: variables.imageText,
        Description: variables.descText,
        price: variables.price,
      }),
    });
  });
  return (
    <div className="ShoePage">
      <div>
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
            onAgree={(a) => {
              setDialog({
                dialog: false,
                navigate: false,
                loading: true,
                updateDialog: false,
              });
              updateMutation(
                {
                  titleText: a.arg1.current.value,
                  descText: a.arg2.current.value,
                  imageText: a.arg3.current.value,
                  priceText: a.arg4.current.value,
                },
                {
                  onSuccess(data) {
                    refetch();
                    setDialog({
                      dialog: false,
                      navigate: false,
                      loading: false,
                      updateDialog: false,
                    });
                  },
                }
              );
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
    </div>
  );
};
