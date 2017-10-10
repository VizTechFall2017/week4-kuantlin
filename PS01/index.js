var svg = d3.select('svg').append('g').attr('transform','translate(100,100)');;

var data2010;
var data2016;

var clicked = true;


var scaleX = d3.scaleLinear().domain([0,100]).range([0, 600]);
var scaleY = d3.scaleLinear().domain([700000,0]).range([0, 400]);

svg.append("g")
    .attr('transform','translate(0,400)')
    .call(d3.axisBottom(scaleX));

svg.append("g")
    .call(d3.axisLeft(scaleY));


d3.csv('./Data.csv', function(dataIn){


    data2010 = dataIn.filter(function(d){
        return d.year == 2010;
    });

    data2016 = dataIn.filter(function(d){
        return d.year == 2016;
    });


    svg.append('text')
        .text('Changing since 2000, in %')
        .attr('transform','translate(250, 440)');

    svg.append('text')
        .text('Generated Clean Energy, in MWh')
        .attr('transform', 'translate(-50,300)rotate(270)');


    svg.selectAll('circles')
        .data(data2016)
        .enter()
        .append('circle')
        .attr('class','dataPoints');

    svg.append('text')
        .text('Biomass')
        .attr('transform','translate(500, 10)');

    svg.append('circle')
        .attr('transform','translate(490, 5)')
        .attr('r','5')
        .attr('fill', 'red');

    svg.append('text')
        .text('Geothermal')
        .attr('transform','translate(500, 25)');

    svg.append('circle')
        .attr('transform','translate(490, 20)')
        .attr('r','5')
        .attr('fill', 'orange');

    svg.append('text')
        .text('Soloar Thermal')
        .attr('transform','translate(500, 40)');

    svg.append('circle')
        .attr('transform','translate(490, 35)')
        .attr('r','5')
        .attr('fill', 'yellow');

    svg.append('text')
        .text('Hydro')
        .attr('transform','translate(500, 55)');

    svg.append('circle')
        .attr('transform','translate(490, 50)')
        .attr('r','5')
        .attr('fill', 'green');

    svg.append('text')
        .text('Wind')
        .attr('transform','translate(500, 70)');

    svg.append('circle')
        .attr('transform','translate(490, 65)')
        .attr('r','5')
        .attr('fill', 'blue');

    svg.append('text')
        .text('Biofuels')
        .attr('transform','translate(500, 85)');

    svg.append('circle')
        .attr('transform','translate(490, 80)')
        .attr('r','5')
        .attr('fill', 'purple');

    drawPoints(data2010);

});


function drawPoints(pointData){

    svg.selectAll('.dataPoints')
        .data(pointData)
        .transition()
        .ease(d3.easeSin)
        .duration(400)
        .attr('cx',function(d){
            return scaleX(+d.x);
        })
        .attr('cy',function(d){
            return scaleY(+d.y);
        })
        .attr('r',function(d){
            return +d.r;
        })
        .attr('fill',function(d){
            return d.fill;
        })
        .attr('opacity',function(d){
            return d.opacity;
        })
    ;
}


function buttonClicked(){


    if(clicked == true){
        drawPoints(data2016);
        clicked = false;
    }
    else{
        drawPoints(data2010);
        clicked = true;
    }


}