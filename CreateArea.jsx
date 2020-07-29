import React, {
  useState
} from "react";
// import Note from "./Note";

function CreateArea(props) {
  const [data, setData] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {
      name: who,
      value: what
    } = event.target;

    setData({
      ...data,
      [who]: what
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.take(data);
    setData({
      title: "",
      content: ""
    });
  }

  return ( <
    div >
    <
    form >
    <
    input name = "title"
    onChange = {
      handleChange
    }
    placeholder = "Title"
    value = {
      data.title
    }
    /> <
    textarea name = "content"
    onChange = {
      handleChange
    }
    placeholder = "Take a note..."
    rows = "3"
    value = {
      data.content
    }
    /> <
    button onClick = {
      handleClick
    } > Add < /button> <
    /form> <
    /div>
  );
}

export default CreateArea;
