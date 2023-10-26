let key = "8a7fcc564830477d867e1cf7dfcbce38"
let date = new Date(),
    day = date.getDate() - 1,
    month = date.getMonth() + 1
let datePerDays = day < 10 ? `0${day}` : day;
let datePerMonth = month < 10 ? `0${month}` : month;
let fnDate = ` ${date.getFullYear()}-${datePerMonth > 10 ? `0${datePerMonth}` : `${datePerMonth}`}-${datePerDays > 10 ? `${datePerDays}` : `${datePerDays}`}`
let api = `
https://newsapi.org/v2/everything?q=apple&from=${fnDate.trim()}&to=${fnDate.trim()}&sortBy=popularity&apiKey=8a7fcc564830477d867e1cf7dfcbce38`
console.log(api)
let containOfFirst = document.querySelector("main .land .articles aside"),
    latestNews = document.querySelector(".latest-news .allNews ")

const fetching = async () => {
    await fetch(api).then((resolve) => {
        let data = resolve.json()
        return data
    },
    ).then((data) => {
        let dataArticals = data.articles;
        let filter = dataArticals.filter((e) => {
            return e.urlToImage !== null
        })
        // setting the main view Section
        let mainView = `
                <div class="head d-flex full-width align-items-center">
                    <img src=${dataArticals[50].urlToImage} alt="">
                    <h4 class="fw-bold fs-4 mx-3">BBC News </h4>
                    <span class="position-relative">Recently</span>
                </div>
                <div class="body mb-3">
                    <h2 class="fw-bold my-3">${dataArticals[50].title}</h2>
                    <p>${dataArticals[50].description}<a class="mx-2 text-dark fw-bold"
                            href="">Learn
                            More</a> </p>
                </div>
                <div class="date text-dark fw-bold">
                    <span >${dataArticals[50].publishedAt}</span>
                </div>
            `
        document.querySelector("main .land section .first-sec").innerHTML = mainView;
        // setting the main view Section 
        // dataArticals.length = 3;
        for (let i = 0; i < 4; i++) {
            let div = `
            <a class='text-dark' target="_blank" href=${dataArticals[i].url}>
                    <article class="d-flex gap-2 col mb-3 ">
                        <div class="image">
                            <img src=${dataArticals[i].urlToImage} alt="">
                        </div>
                        <div class="details">
                            <div class="hed align-items-center d-flex">
                                <img src="imgs/land Part/images.png" alt="">
                                    <h5 class="position-relative my-2 mx-1">${dataArticals[i].author}</h5>
                                    <p>Recent Time</p>
                            </div>
                            <h6 class="my-1">${dataArticals[i].title}</h6>
                            <div class="end">
                                <span class="pinkSpan">${dataArticals[i].source.name}</span>
                            </div>
                        </div>
                        </article>
                        </a>
                        `
            containOfFirst.innerHTML += div
        }
        // Setting Landing Section Image
        document.querySelector("main .land section .last-sec img").src = (dataArticals[70].urlToImage)
        // Setting Landing Section Image
        // Setting all News Latest

        for (let j = 15; j > 4; j--) {
            let New = `
    
                    <div class="new position-relative col-sm-12 col-md-6 col-lg-4" >
                    <img class="mt-5 mb-3 rounded-4" src=${filter[j].urlToImage}
                        alt="">
                        <div class="d-flex align-items-center">
                            <img src=${filter[j].urlToImage} alt="">
                                <h4 class="mx-2 my-2">${filter[j].author}</h4>
                                <p class="mx-3 position-relative">Recently</p>
                        </div>
                        <div class="nd">
                            <h3 class="fw-bold">${filter[j].title}
                            </h3>
                            <p class="my-2">${filter[j].description}</p>
                            <span class="mt-3 d-block pinkSpan">${filter[j].source.name}</span>
                            <a class='position-absolute text-dark fw-bold' target='_blank' href=${filter[j].url}>Visit From Here</a>
                        </div>
                    </div>
                `
            latestNews.innerHTML += New
        }
        //set the most news 
        let mostN = document.createElement("section")
        mostN.innerHTML = `
            
                    <section class="bordered-sm col-sm-12">
                        <div class="img">
                            <img class="rounded-3" src=${dataArticals[90].urlToImage}  alt="">
                        </div>
                        <div class="info d-flex align-items-center">
                            <img class="mx-2 my-3" src=${dataArticals[92].urlToImage} alt="">
                            <h3 class="position-relative fs-5 fw-bold mx-2">${dataArticals[90].author}</h3>
                            <p class="mx-3">10 min</p>
                        </div>
                        <h2 class="fw-bold my-2">${dataArticals[90].title}</h2>
                        <p class="my-2">${dataArticals[90].description}</p>
                        <span class="pinkSpan">${dataArticals[90].source.name}</span>
                    </section>
            `
        document.querySelector("section .most-sec .left").innerHTML = mostN.innerHTML
        for (let e = 19; e > 16; e--) {
            let daiv = `
                        <div class="most-new d-flex mb-2">
                            <div class="col-6"><img class="rounded-4" src=${dataArticals[e].urlToImage}></div>
                            <div class="details col-6">
                                <div class="mx-1 hed align-items-center d-flex">
                                    <img class="radius-image " src=${dataArticals[e].urlToImage} alt="">
                                    <h5 class="position-relative my-2 mx-1 ">${dataArticals[e].author}</h5>
                                    <p class=" position-relative">Recently</p>
                                </div>
                                <h6 class="my-1 position-relative fw-bold fs-5">${dataArticals[e].title}</h6>
                                <div class="end">
                                    <span class="pinkSpan">${dataArticals[e].source.name}</span>
                                </div>
                            </div>
                        </div>
                
                `
            document.querySelector("section .most-sec .right").innerHTML += daiv
        }
        for (let z = 50; z < 54; z++) {
            let finalSec = `
                            <a class='text-dark' target="_blank" href =${dataArticals[z].url}>
                                <div class="high p-2">
                        <img class=" rounded-3" src=${dataArticals[z].urlToImage} alt="">
                        <div class="details my-3">
                            <div class="mx-1 hed align-items-center d-flex">
                                <img class="radius-image " src=${dataArticals[z].urlToImage} alt="">
                                <h5 class="position-relative m-2 fw-bold ">${dataArticals[z].author}</h5>
                                <p class="mx-3 position-relative">Recently</p>
                            </div>
                            <h6 class="my-1 position-relative fw-bold ">
                                ${dataArticals[z].title}
                            </h6>
                            <div class="end">
                                <span class="pinkSpan">${dataArticals[z].source.name}</span>
                            </div>
                        </div>
                    </div>
                            </a>
                `
            document.querySelector(".weekly .highlight").innerHTML += finalSec
        }
    }).catch((err) => {
        let faild = document.createElement("h1");

        faild.innerHTML = `<i class='bx bx-error-circle' ></i> Oops!Please Check Your InterNet And Try Again`
        // 
        document.querySelector("main").innerHTML = ""
        document.querySelector("footer").remove()
        document.querySelector("main").appendChild(faild)
    })
}
fetching()