var svg = d3.select('svg')
    .append('g')
    .attr('transform','translate(100,100)');

/* Your code goes here */

d3.csv('./data.csv', function(dataIn){   //load data, bind data, and draw data, only run once

    console.log(dataIn);
    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('cx',function(d) {
            return scaleX(d.x)
        })
        .attr('cy',function(d) {
            return scaleX(d.y)
        })

        .attr('r',10)
    svg .append('g')
        .attr('transform','translate(0,400)')
        .call(d3.axisBottom(scaleX));

    svg .append('g')
        .call(d3.axisLeft(scaleY));

    svg.append('text')
        .attr('x',275)
        .attr('y',-25)
        .attr('font-size',36)
        .text('Test');



    svg.append('text')
        .attr('x',270)
        .attr('y',450)
        .attr('front-size',16)
        .text('x axis title');


    svg.append('text')
        .attr('x',-235)
        .attr('y',-50)
        .attr('front-size',16)
        .text('y axis title')
        .attr('transform','rotate(270)');
});

var scaleX = d3.scaleLinear().domain ([0,400]). range ([0,600]);
var scaleY = d3.scaleLinear().domain ([500,0]). range ([0,400]); //flip data of domain to match values of the xaxis

function buttonClicked(){
    console.log('here');
}



//.csv(load data)
//updata Data(){do something to the data --> bind data, draw data}