const Result = (props) => {
  const data = props.data;
  const tax = data.tax / 100;
  let interest = 0, result = 0, net = 0, gross = 0;
  let multiplier = props.multiplier ? props.multiplier : 1;

  if (!props.bank) {
    interest = data.interest / 100;
  } else {
    interest = 0.25 / 100;
  }

  gross = (data.adb * interest * (data.days / 360));
  net = gross * (1 - tax);

  if (props.type === 'net') {
    result = net;
  } else if (props.type !== 'net' || props.bank !== '') {
    result = gross;
  }

  result = result * multiplier;

  result = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'Php' }
  ).format(result); // '$100.00'

  return result;
}

export default Result