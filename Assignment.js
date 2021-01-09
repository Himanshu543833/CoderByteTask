function functionsubmit() {
    console.log(sessionStorage.getItem('rating'))
    console.log(sessionStorage.getItem('rating1'))
    console.log(sessionStorage.getItem('rating2'))
    console.log(sessionStorage.getItem('rating3'))
}
document.getElementById('extremlygood').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood').style.backgroundColor="green"
 document.getElementById('good').style.backgroundColor="green"
 document.getElementById('extremlybad').style.backgroundColor="green"
 document.getElementById('bad').style.backgroundColor="green"
 document.getElementById('neutral').style.backgroundColor="green"

 sessionStorage.setItem('rating','Responsiveness: Extremly good')
})
document.getElementById('good').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood').style.backgroundColor="darkGray"
 document.getElementById('good').style.backgroundColor="lightgreen"
 document.getElementById('extremlybad').style.backgroundColor="lightgreen"
 document.getElementById('bad').style.backgroundColor="lightgreen"
 document.getElementById('neutral').style.backgroundColor="lightgreen"
 sessionStorage.setItem('rating','Responsiveness: Good')
})
document.getElementById('neutral').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood').style.backgroundColor="darkGray"
 document.getElementById('good').style.backgroundColor="darkGray"
 document.getElementById('extremlybad').style.backgroundColor="orange"
 document.getElementById('bad').style.backgroundColor="orange"
 document.getElementById('neutral').style.backgroundColor="orange"
 sessionStorage.setItem('rating','Responsiveness: Neutral')
})
document.getElementById('bad').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood').style.backgroundColor="darkGray"
 document.getElementById('good').style.backgroundColor="darkGray"
 document.getElementById('extremlybad').style.backgroundColor="orangered"
 document.getElementById('bad').style.backgroundColor="orangered"
 document.getElementById('neutral').style.backgroundColor="darkGray"
 sessionStorage.setItem('rating','Responsiveness: Bad')
})
document.getElementById('extremlybad').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood').style.backgroundColor="darkGray"
 document.getElementById('good').style.backgroundColor="darkGray"
 document.getElementById('extremlybad').style.backgroundColor="red"
 document.getElementById('bad').style.backgroundColor="darkGray"
 document.getElementById('neutral').style.backgroundColor="darkGray"
 sessionStorage.setItem('rating','Responsiveness: Extremly Bad')
})
//id =1
document.getElementById('extremlybad1').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood1').style.backgroundColor="darkGray"
 document.getElementById('good1').style.backgroundColor="darkGray"
 document.getElementById('extremlybad1').style.backgroundColor="red"
 document.getElementById('bad1').style.backgroundColor="darkGray"
 document.getElementById('neutral1').style.backgroundColor="darkGray"
 sessionStorage.setItem('rating1','Compentency un advicing right solutions: Extremly Bad')
})
document.getElementById('extremlygood1').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood1').style.backgroundColor="green"
 document.getElementById('good1').style.backgroundColor="green"
 document.getElementById('extremlybad1').style.backgroundColor="green"
 document.getElementById('bad1').style.backgroundColor="green"
 document.getElementById('neutral1').style.backgroundColor="green"
 sessionStorage.setItem('rating1','Compentency un advicing right solutions: Extremly Good')
})
document.getElementById('good1').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood1').style.backgroundColor="darkGray"
 document.getElementById('good1').style.backgroundColor="lightgreen"
 document.getElementById('extremlybad1').style.backgroundColor="lightgreen"
 document.getElementById('bad1').style.backgroundColor="lightgreen"
 document.getElementById('neutral1').style.backgroundColor="lightgreen"
 sessionStorage.setItem('rating1','Compentency un advicing right solutions: Good')
})
document.getElementById('neutral1').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood1').style.backgroundColor="darkGray"
 document.getElementById('good1').style.backgroundColor="darkGray"
 document.getElementById('extremlybad1').style.backgroundColor="orange"
 document.getElementById('bad1').style.backgroundColor="orange"
 document.getElementById('neutral1').style.backgroundColor="orange"
 sessionStorage.setItem('rating1','Compentency un advicing right solutions: Neutral')
})
document.getElementById('bad1').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood1').style.backgroundColor="darkGray"
 document.getElementById('good1').style.backgroundColor="darkGray"
 document.getElementById('extremlybad1').style.backgroundColor="orangered"
 document.getElementById('bad1').style.backgroundColor="orangered"
 document.getElementById('neutral1').style.backgroundColor="darkGray"
 sessionStorage.setItem('rating1','Compentency un advicing right solutions: Bad')
})
//id =2
document.getElementById('extremlygood2').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood2').style.backgroundColor="green"
 document.getElementById('good2').style.backgroundColor="green"
 document.getElementById('extremlybad2').style.backgroundColor="green"
 document.getElementById('bad2').style.backgroundColor="green"
 document.getElementById('neutral2').style.backgroundColor="green"
 sessionStorage.setItem('rating2','Trustworthiness: Extremely Good')
})
document.getElementById('good2').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood2').style.backgroundColor="darkGray"
 document.getElementById('good2').style.backgroundColor="lightgreen"
 document.getElementById('extremlybad2').style.backgroundColor="lightgreen"
 document.getElementById('bad2').style.backgroundColor="lightgreen"
 document.getElementById('neutral2').style.backgroundColor="lightgreen"
 sessionStorage.setItem('rating2','Trustworthiness: Good')
})
document.getElementById('neutral2').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood2').style.backgroundColor="darkGray"
 document.getElementById('good2').style.backgroundColor="darkGray"
 document.getElementById('extremlybad2').style.backgroundColor="orange"
 document.getElementById('bad2').style.backgroundColor="orange"
 document.getElementById('neutral2').style.backgroundColor="orange"
 sessionStorage.setItem('rating2','Trustworthiness: Neutral')
})
document.getElementById('bad2').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood2').style.backgroundColor="darkGray"
 document.getElementById('good2').style.backgroundColor="darkGray"
 document.getElementById('extremlybad2').style.backgroundColor="orangered"
 document.getElementById('bad2').style.backgroundColor="orangered"
 document.getElementById('neutral2').style.backgroundColor="darkGray"
 sessionStorage.setItem('rating2','Trustworthiness: Bad')
})
document.getElementById('extremlybad2').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood2').style.backgroundColor="darkGray"
 document.getElementById('good2').style.backgroundColor="darkGray"
 document.getElementById('extremlybad2').style.backgroundColor="red"
 document.getElementById('bad2').style.backgroundColor="darkGray"
 document.getElementById('neutral2').style.backgroundColor="darkGray"
 sessionStorage.setItem('rating2','Trustworthiness: Extremely Bad')
})
//id=3
document.getElementById('extremlygood3').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood3').style.backgroundColor="green"
 document.getElementById('good3').style.backgroundColor="green"
 document.getElementById('extremlybad3').style.backgroundColor="green"
 document.getElementById('bad3').style.backgroundColor="green"
 document.getElementById('neutral3').style.backgroundColor="green"
 sessionStorage.setItem('rating3','Customer Service and support: Extremely Good')
})
document.getElementById('good3').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood3').style.backgroundColor="darkGray"
 document.getElementById('good3').style.backgroundColor="lightgreen"
 document.getElementById('extremlybad3').style.backgroundColor="lightgreen"
 document.getElementById('bad3').style.backgroundColor="lightgreen"
 document.getElementById('neutral3').style.backgroundColor="lightgreen"
 sessionStorage.setItem('rating3','Customer Service and support:  Good')
})
document.getElementById('neutral3').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood3').style.backgroundColor="darkGray"
 document.getElementById('good3').style.backgroundColor="darkGray"
 document.getElementById('extremlybad3').style.backgroundColor="orange"
 document.getElementById('bad3').style.backgroundColor="orange"
 document.getElementById('neutral3').style.backgroundColor="orange"
 sessionStorage.setItem('rating3','Customer Service and support: Neutral')
})
document.getElementById('bad3').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood3').style.backgroundColor="darkGray"
 document.getElementById('good3').style.backgroundColor="darkGray"
 document.getElementById('extremlybad3').style.backgroundColor="orangered"
 document.getElementById('bad3').style.backgroundColor="orangered"
 document.getElementById('neutral3').style.backgroundColor="darkGray"
 sessionStorage.setItem('rating3','Customer Service and support: Bad')
})
document.getElementById('extremlybad3').addEventListener('mouseenter',function(){
 document.getElementById('extremlygood3').style.backgroundColor="darkGray"
 document.getElementById('good3').style.backgroundColor="darkGray"
 document.getElementById('extremlybad3').style.backgroundColor="red"
 document.getElementById('bad3').style.backgroundColor="darkGray"
 document.getElementById('neutral3').style.backgroundColor="darkGray"
 sessionStorage.setItem('rating3','Customer Service and support: Extremely Bad')
})
