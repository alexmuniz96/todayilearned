export default function initFetchBitcoin(){
  
  async function getBitcoin(url){
  try{
    const responseBitcoin = await fetch(url)
    const bodyBitcoin = await responseBitcoin.json()
    const btnPreco = document.querySelector(".btn-preco")
    btnPreco.innerHTML = (100 / bodyBitcoin.BRL.sell).toFixed(4)
    console.log(bodyBitcoin.BRL.sell.toFixed(4))
  } catch(error){
    console.log(error)
  }
  }

  getBitcoin("https://blockchain.info/ticker")
  
}