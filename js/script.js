const _bingURL = "https://www.bing.com/search?q=", _searchTerms = ["Brown eggs", "Sweet fresh stawberry", "Asparagus", "Green smoothie", "Raw legums", "Baking cake", "Pesto with basil", "Hazelnut in black ceramic bowl", "Fresh stawberry", "Lemon and salt", "Homemade bread", "Legums", "Fresh tomato", "Healthy breakfast", "Green beans", "Baked stuffed portabello mushrooms", "Strawberry jelly", "Pears juice", "Fresh pears", "Caprese salad", "Oranges", "Vegan food", "Breakfast with muesli", "Honey", "Breakfast with cottage", "Strawberry smoothie", "Strawberry and mint", "Ricotta", "Cuban sandwiche", "Granola", "Smoothie with chia seeds", "Yogurt", "Sandwich with salad", "Cherry", "Raw asparagus", "Corn", "Vegan", "Fresh blueberries", "Smashed avocado", "Italian ciabatta", "Rustic breakfast", "Sliced lemons", "Plums", "French fries", "Strawberries", "Ground beef meat burger", "Tomatoes", "Basil", "Fruits bouquet", "Peaches on branch"], b_searchbox = document.getElementById("b_searchbox"), b_searchbutton = document.getElementById("b_searchbutton"), b_searchlabel = document.getElementById("b_searchlabel"), b_searchlinks = document.getElementById("b_searchlinks"), b_searchmessage = document.getElementById("b_searchmessage"), search = () => { let e = parseInt(b_searchbox.value.match(/\d+/g)); if (NaN !== e && e > 0) { e > 50 && (b_searchbox.value = e = 50), b_searchbutton.disabled = b_searchbox.disabled = !0, b_searchlabel.style.display = "inline-block"; for (let a = 1; a <= e; a++) { let s = `${_searchTerms[Math.floor(Math.random() * _searchTerms.length)].toLowerCase()} (${a})`, r = _bingURL + encodeURI(s); setTimeout((() => { b_searchlabel.innerText = `Search "${s}" in progress, please wait...`, window.open(r), b_searchlinks.innerHTML += `<li><a href='${r}' target='_blank'>${r}</a></li>`, "" !== b_searchlinks.innerHTML && (b_searchmessage.innerText = ""), a == e && (b_searchbutton.disabled = b_searchbox.disabled = !1, b_searchlabel.innerText = "", b_searchbox.value = "") }), 3e3 * (a - 1)) } } else b_searchlabel.innerText = "Please enter a valid number of searches." }; function gtag() { dataLayer.push(arguments) } window.onload = () => { b_searchbutton.onclick = search, b_searchbox.onkeyup = e => { 13 === e.keyCode && search() } }, window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "G-YXNCPPFVCW");