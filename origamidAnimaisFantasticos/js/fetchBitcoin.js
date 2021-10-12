export default function FetchBitcoin(url, target) {

  async function getBitcoin() {
    try {
      const responseBitcoin = await fetch(url)
      const bodyBitcoin = await responseBitcoin.json()
      const btnPreco = document.querySelector(target)
      btnPreco.innerHTML = (100 / bodyBitcoin.BRL.sell).toFixed(4)
    } catch (error) {
      console.log(error)
    }
  }
  return getBitcoin()

}