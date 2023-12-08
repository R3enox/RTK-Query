import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiMailSend } from "react-icons/bi";
import styles from "./Form.module.css";
import { useAddPostMutation } from "../../redux/commentApi";

export const Form = () => {
  // const [author, setAuthor] = useState('');
  // const [content, setContent] = useState('');
  const [data, setData] = useState({ author: "", content: "" });
  const [addPos, { isError, isLoading }] = useAddPostMutation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    addPos(data);
    setData({ author: "", content: "" });
  };

  return (
    <div className={styles.formWrapper}>
      {/* {isError && toast.error("An error has occurred")} */}
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input
            type="text"
            name="author"
            className={styles.input}
            value={data.author}
            onChange={onHandleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            name="content"
            rows="5"
            value={data.content}
            onChange={onHandleChange}
          ></textarea>
        </label>

        <button className={styles.formBtn}>
          <BiMailSend className={styles.icon} />
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};
