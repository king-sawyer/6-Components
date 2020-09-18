import React from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Summary(props) {
  //   console.log(props);
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {props.summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(props.total)}
        </div>
      </div>
    </section>
  );
}

export default Summary;
