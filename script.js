function updateTotal() {
  const dollarValue = document.getElementById("dollar").value * 1;
  const halfDollarValue = document.getElementById("half-dollar").value * 0.5;
  const quarterValue = document.getElementById("quarter").value * 0.25;
  const dimeValue = document.getElementById("dime").value * 0.1;
  const nickelValue = document.getElementById("nickel").value * 0.05;
  const pennyValue = document.getElementById("penny").value * 0.01;

  const total =
    dollarValue +
    halfDollarValue +
    quarterValue +
    dimeValue +
    nickelValue +
    pennyValue;

  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}
