import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getBooks } from "../../store/actions/books";

import BookCard from "./components/bookCard";

function Home({ books, actionGetBooks }) {
  useEffect(() => {
    actionGetBooks();
  }, []);

  return (
    <div className="main-wrap">
      <div className="container">
        <Link to="/search">
          <i className="fa fa-search fa-2x top-bar" aria-hidden="true"></i>
        </Link>
        <div
          className="main-slide"
          data-sal="zoom-out"
          data-sal-delay="300"
          data-sal-duration="1200"
          data-sal-easing="ease-out-bounce"
        >
          <h1>Books Diary</h1>
          <p>
            “Three white feathers fluttered out of the box, swayed and rocked
            for a moment in the air, and then, one after another, settled gently
            down upon the floor. They lay like flakes of snow upon the dark
            polished boards.”
          </p>
        </div>
      </div>
      <h2 className="cards-title">Favourite</h2>
      <div className="cards">
        {books?.length > 0 &&
          books.map((book) => <BookCard {...book} key={book._id} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    books: store.books.items,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actionGetBooks: async () => {
    try {
      return await dispatch(getBooks());
    } catch (e) {
      throw e;
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
