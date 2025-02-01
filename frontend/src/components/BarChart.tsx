import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface BarChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, width = 500, height = 300 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!svgRef.current || !tooltipRef.current) return;
    

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous renders
    const tooltip = d3.select(tooltipRef.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, chartWidth])
      .padding(0.1);

    const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value) || 0]).nice().range([chartHeight, 0]);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    chart
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.label)!)
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => chartHeight - y(d.value))
      .attr("fill", "steelblue")
      .on("mouseover", function (event, d) { 
        const rect = (this as SVGRectElement).getBoundingClientRect(); // Use 'this' to get the actual element
      
        tooltip
          .style("visibility", "visible")
          .text(`${d.label}: ${d.value}`)
          .style("left", `${(rect.left + window.scrollX) - 445}px`) // Adjust for scrolling
          .style("top", `${(rect.top + window.scrollY) - 180}px`);
      })
      
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });
      

    chart
      .append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x));

    chart.append("g").call(d3.axisLeft(y));
  }, [data, width, height]);

  return (
    <div style={{ position: "relative" }}>
      <svg ref={svgRef} width={width} height={height}></svg>
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.75)",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "5px",
          borderRadius: "4px",
          fontSize: "12px",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
};

export default BarChart;
