import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/4154ldEx2xL._SX346_BO1,204,203,200_.jpg",
    title: "The algorithm design manual",
    author: "Steven S. Skiena",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/61V67pi5UGL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Thinking in C++ second edition",
    author: "Bruce Eckel",
  },
  {
    img: "https://m.media-amazon.com/images/I/41LTmrpQYyL.jpg",
    title: "competitive programmers handbook",
    author: "antti laaksenon",
  },
];
function BookList() {
  return (
    <section className={"booklist"}>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  const clickHandler = () => {
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  console.log(props);
  function handleClick(e) {
    e.preventDefault();
    alert("The link was clicked.");
  }
  const sayHello = (name) => {
    alert(`Hello, ${name}!`);
  };
  const { img, title, author } = props;
  return (
    <article className={"book"}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log({ title })}>title: {title}</h1>
      <h4>author info: {author}</h4>
      <button type='button' onClick={clickHandler}>
        refreance example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        More Complex example
      </button>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
