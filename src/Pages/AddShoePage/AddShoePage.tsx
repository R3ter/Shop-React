import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import DialogForm from "../../Components/DialogForm/DialogForm";
import LoadingSpinner from "../../Components/Loaing/LoadingSpinner/LoadingSpinner";
import "./style.scss";
export default () => {
  const { data, mutate: addMutation } = useMutation((variables: any) => {
    return fetch("https://63f74ea0833c7c9c60810d71.mockapi.io/Shoes/", {
      method: "POST",
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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const ref = useRef({ goTo: false, link: "/" });
  useEffect(() => {
    if (ref.current.goTo) {
      console.log(ref);
      navigate(ref.current.link);
    }
  }, [ref.current]);
  return (
    <div className="addShoePage">
      <DialogForm
        dialogTitle="Add Item"
        onAgree={(a) => {
          setLoading(true);
          addMutation(
            {
              titleText: a.arg1.current.value,
              descText: a.arg2.current.value,
              imageText: a.arg3.current.value,
              priceText: a.arg4.current.value,
            },
            {
              onSuccess(data) {
                data.json().then((e) => {
                  ref.current = { goTo: true, link: "/ShoePage/" + e.id };
                  setLoading(false);
                });
              },
            }
          );
        }}
        onRefuse={() => {
          ref.current = { goTo: true, link: "/" };
        }}
      />
      {loading && <LoadingSpinner />}
    </div>
  );
};
