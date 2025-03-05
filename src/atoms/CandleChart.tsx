'use client'; // Mark this as a Client Component
import * as d3 from 'd3';
import { RefObject, useEffect, useRef } from 'react';

export const CandlestickChart = ({ data, width = 1200, height = 600 }) => {
  const chartRef : RefObject<SVGSVGElement> = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Clear previous chart
    d3.select(chartRef.current).selectAll('*').remove();

    // Set up SVG container
    const svg = d3.select(chartRef.current)
      .attr('width', '100%')
      .attr('height', '1000')
      .style('background', '#000')
      .style('border', '1px solid #000');

    // Set up scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => new Date(d.date).toLocaleTimeString()))
      .range([0, width])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([d3.min(data, d => Math.min(d.open, d.close)), d3.max(data, d => Math.max(d.open, d.close))])
      .range([height, 0]);

    // Draw candlesticks
    svg.selectAll('.candlestick')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'candlestick')
      .attr('x', d => xScale(new Date(d.date).toLocaleTimeString()))
      .attr('y', d => yScale(Math.max(d.open, d.close)))
      .attr('width', xScale.bandwidth())
      .attr('height', d => Math.abs(yScale(d.open) - yScale(d.close)))
      .attr('fill', d => d.open > d.close ? 'red' : 'green');

    // Draw wicks (high-low lines)
    svg.selectAll('.wick')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'wick')
      .attr('x1', d => xScale(new Date(d.date).toLocaleTimeString()) + xScale.bandwidth() * 2)
      .attr('x2', d => xScale(new Date(d.date).toLocaleTimeString()) + xScale.bandwidth() * 2)
      .attr('y1', d => yScale(d.high))
      .attr('y2', d => yScale(d.low))
      .attr('stroke', 'black')
      .attr('stroke-width', 1);

    // Add X axis
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(5))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-1.6em')
      .attr('dy', '0.30em')
      .attr('transform', 'rotate(-45)');

    // Add Y axis
    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, [data, width, height]);

  return <svg ref={chartRef}></svg>;
};

