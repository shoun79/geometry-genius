document.getElementById('blog-btn').addEventListener('click', function () {
    window.open('question.html', '_blank')
    //location.href = 'question.html', target = '_blank';
})

let count = 0;
document.getElementById('triangle-btn').addEventListener('click', function () {
    // Area (A) = 0.5 * b * h
    count += 1;

    const bInput = getInputValueById('b-input');
    const hInput = getInputValueById('h-input');
    if (isNaN(bInput && hInput)) {
        alert('please enter valid value');
        return;
    }
    else if (bInput <= 0) {
        alert('please enter valid value');
        return;
    }
    else if (hInput <= 0) {
        alert('please enter valid value');
        return;
    }
    const triangleArea = (0.5 * bInput * hInput).toFixed(2);

    const areaDiv = document.getElementById('area-div');
    const li = document.createElement('li');

    li.innerHTML = `<div class="d-flex justify-content-around mt-2">
    <div><small>${count}. Triangle</small></div>
    <div><small>${triangleArea}cm<sup>2</sup></small></div>
    <div><small><button class="btn btn-primary calculate-btn p-1 fs-6">Covert to m<sup>2</sup> </button>
    </small></div>
    </div>`
    areaDiv.appendChild(li)
});

document.getElementById('rectangle-btn').addEventListener('click', function () {
    // Area (A) = w * I
    count += 1;

    const wInput = getInputValueById('w-input');
    const lInput = getInputValueById('l-input');
    if (isNaN(lInput && wInput)) {
        alert('please enter valid value');
        return;
    }
    else if (lInput <= 0) {
        alert('please enter valid value');
        return;
    }
    else if (wInput <= 0) {
        alert('please enter valid value');
        return;
    }
    const rectangleArea = (wInput * lInput).toFixed(2);

    const areaDiv = document.getElementById('area-div');
    const li = document.createElement('li');
    li.innerHTML = `<div class="d-flex justify-content-around mt-2">
    <div><small>${count}. Rectangle</small></div>
    <div><small>${rectangleArea}cm<sup>2</sup></small></div>
    <div><small><button class="btn btn-primary calculate-btn p-1 fs-6">Covert to m<sup>2</sup> </button>
    </small></div>
    </div>`
    areaDiv.appendChild(li);
});

document.getElementById('parallelogram-btn').addEventListener('click', function () {
    // Area (A) = b * h
    count += 1;

    const parallelogramBValue = getElementValueById('b-value');
    const parallelogramHValue = getElementValueById('h-value');
    const parallelogramArea = (parallelogramBValue * parallelogramHValue).toFixed(2);

    const areaDiv = document.getElementById('area-div');
    const li = document.createElement('li');

    li.innerHTML = `<div class="d-flex justify-content-around mt-2">
    <div><small>${count}. Parallelogram</small></div>
    <div><small>${parallelogramArea}cm<sup>2</sup></small></div>
    <div><small><button class="btn btn-primary calculate-btn p-1 fs-6">Covert to m<sup>2</sup> </button>
    </small></div>
    </div>`
    areaDiv.appendChild(li);
});

document.getElementById('rhombus-btn').addEventListener('click', function () {
    // Area (A) = 0.5 * d1 * d2
    count += 1;

    const rhombusD1Value = getElementValueById('d1-value');
    const rhombusD2Value = getElementValueById('d2-value');
    const rhombusArea = (0.5 * rhombusD1Value * rhombusD2Value).toFixed(2);

    const areaDiv = document.getElementById('area-div');
    const li = document.createElement('li');

    li.innerHTML = `<div class="d-flex justify-content-around mt-2">
    <div><small>${count}. Rhombus</small></div>
    <div><small>${rhombusArea}cm<sup>2</sup></small></div>
    <div><small><button class="btn btn-primary calculate-btn p-1 fs-6">Covert to m<sup>2</sup> </button>
    </small></div>
    </div>`
    areaDiv.appendChild(li);
});

document.getElementById('pentagon-btn').addEventListener('click', function () {
    // Area (A) = 0.5 * p * b


    count += 1;

    const pentagonPValue = getElementValueById('p-value');
    const pentagonHValue = getElementValueById('pentagon-hvalue');
    const pentagonArea = (0.5 * pentagonPValue * pentagonHValue).toFixed(2);


    const areaDiv = document.getElementById('area-div');
    const li = document.createElement('li');

    li.innerHTML = `<div class="d-flex justify-content-around mt-2">
    <div><small>${count}. Pentagon</small></div>
    <div><small>${pentagonArea}cm<sup>2</sup></small></div>
    <div><small><button class="btn btn-primary calculate-btn p-1 fs-6">Covert to m<sup>2</sup> </button>
    </small></div>
    </div>`
    areaDiv.appendChild(li);
});
document.getElementById('ellipse-btn').addEventListener('click', function () {
    // Area (A) = PI * a*b
    count += 1;

    const ellipseAValue = getElementValueById('ellipse-avalue');
    const ellipseBValue = getElementValueById('ellipse-bvalue');
    const ellipseArea = (3.1416 * ellipseAValue * ellipseBValue).toFixed(2);


    const areaDiv = document.getElementById('area-div');
    const li = document.createElement('li');

    li.innerHTML = `<div class="d-flex justify-content-around mt-2">
    <div><small>${count}. Ellipse</small></div>
    <div><small>${ellipseArea}cm<sup>2</sup></small></div>
    <div><small><button class="btn btn-primary calculate-btn p-1 fs-6">Covert to m<sup>2</sup> </button>
    </small></div>
    </div>`
    areaDiv.appendChild(li);
});
// random color add 
const cardRandoms = document.getElementsByClassName('card-random');
for (const cardRandom of cardRandoms) {
    cardRandom.addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) +
            ',' + Math.round(Math.random() * 255) +
            ',' + Math.round(Math.random() * 255) + ')';
    })
};

for (const cardRandom of cardRandoms) {
    cardRandom.addEventListener('mouseleave', function (event) {
        event.target.style.backgroundColor = 'white';
    })
};