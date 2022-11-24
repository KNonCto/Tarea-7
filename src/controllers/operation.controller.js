function getSum(req, res) {
  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);

  if (isNaN(number1) || isNaN(number2)) {
    return res
      .status(400)
      .send({ error: "numberN debe ser un número donde N es 1 o 2" });
  }

  return res.status(200).send({ result: number1 + number2 });
}

function getSubtraction(req, res) {
  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);

  if (isNaN(number1) || isNaN(number2)) {
    return res
      .status(400)
      .send({ error: "numberN debe ser un número donde N es 1 o 2" });
  }

  return res.status(200).send({ result: number1 - number2 });
}

function getMultiplication(req, res) {
  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);

  if (isNaN(number1) || isNaN(number2)) {
    return res
      .status(400)
      .send({ error: "numberN debe ser un número donde N es 1 o 2" });
  }

  return res.status(200).send({ result: number1 * number2 });
}

function getDivision(req, res) {
  const quotient = parseInt(req.body.quotient);
  const divisor = parseInt(req.body.divisor);

  if (divisor == 0) {
    return res.status(400).send({ error: "el divisor debe ser distinto de 0" });
  } else if (isNaN(quotient) || isNaN(divisor)) {
    return res
      .status(400)
      .send({ error: "$ debe ser un número donde $ es quotient o divisor" });
  }

  return res.status(200).send({ result: quotient / divisor });
}

export { getSum, getSubtraction, getMultiplication, getDivision };
