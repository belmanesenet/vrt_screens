document.querySelector('#report').addEventListener('click', async() => {
    axios.post('http://localhost:3000')
  .then(function (response) {
    getData();
    })
  .catch(function (error) {
    })
  .then(function () {
    });
});

const paint = (information) => {
    console.log(information);
    const container = document.querySelector('.row');
    container.innerHTML = '';

    let content = '';
    for(let info of information.data) {
        content = content.concat(`
        <div class="col-sm-5 col-lg-4">
            <img src="http://localhost:4000/${info[0]}" alt='img' class="img-thumbnail">
        </div>
        <div class="col-sm-5 col-lg-4">
            <img src="http://localhost:4000/${info[1]}" alt='img' class="img-thumbnail">
        </div>
        <div class="col-sm-5 col-lg-4">
            <img src="http://localhost:4000/${info[3]}" alt='img' class="img-thumbnail">
        </div>`);
    }
    container.innerHTML = content;
}
const getData = async() => {
    axios.get('http://localhost:3000')
        .then(function (response) {
            paint(response);
            })
        .catch(function (error) {
            })
        .then(function () {
            });
}

getData();