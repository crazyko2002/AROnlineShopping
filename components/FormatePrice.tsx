type Amount ={
    amount: Number;
}

const FormatePrice = ({amount}:Amount) => {
    const formattedAmount = new Number(amount).toLocaleString("China-HK",{
        style: "currency",
        currency: "HKD",
        minimumFractionDigits: 2,
    });
  return <span>{formattedAmount}</span>;
}

export default FormatePrice