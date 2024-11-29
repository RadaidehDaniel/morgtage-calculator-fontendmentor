/* eslint-disable react/prop-types */
import pic from "../assets/images/illustration-empty.svg";

export default function Result({ data }) {
  const currenyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let mortgageValue = 0;

  if (data.mortgageType === "repayment") {
    mortgageValue =
      Number(data.amount) + data.amount * (data.interest / 100) * data.term;
  }

  if (data.mortgageType === "interest") {
    mortgageValue = Number(data.amount) * (data.interest / 100) * data.term;
  }

  if (data.mortgageType === "none") {
    return (
      <div id="result">
        <img src={pic} alt="" />
        <h2>Results shown here</h2>
        <p>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    );
  }

  return (
    <div id="result-2">
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="result-box">
        <p className="result-box-title">Your monthly repayments</p>
        <p className="result-box-value">
          {currenyFormatter.format(mortgageValue / (data.term * 12))}
        </p>
        <p className="result-box-title">
          Total you&apos;ll repay over the term
        </p>
        <p className="result-box-value-2">
          {currenyFormatter.format(mortgageValue)}
        </p>
      </div>
    </div>
  );
}
