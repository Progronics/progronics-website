import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const GrowthChart: React.FC = () => {

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);
    let chart: any = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
      })
    );

    chart.get("colors").set("step", 3);
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    cursor.lineX.set("visible", false);
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "quarter",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50,
        }),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    const data = [
      { quarter: "Q1", value: 50 },
      { quarter: "Q2", value: 55 },
      { quarter: "Q3", value: 58 },
      { quarter: "Q4", value: 65 },
      { quarter: "Q1 (2024)", value: 100, bullet: true },
    ];

    xAxis.data.setAll(data);

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Quarterly Growth",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "quarter",
        tooltip: am5.Tooltip.new(root, { disabled: true }),
      })
    );
    series.strokes.template.setAll({
      strokeWidth: 2,
      strokeDasharray: [3, 3],
    });

    series.bullets.push(function (root: any, series: any, dataItem: any) {
      if (dataItem.dataContext.bullet) {
        var container = am5.Container.new(root, {});
        var circle0 = container.children.push(am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0xff0000)
        }));
        var circle1 = container.children.push(am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0xff0000)
        }));

        circle1.animate({
          key: "radius",
          to: 20,
          duration: 1000,
          easing: am5.ease.out(am5.ease.cubic),
          loops: Infinity
        });
        circle1.animate({
          key: "opacity",
          to: 0,
          from: 1,
          duration: 1000,
          easing: am5.ease.out(am5.ease.cubic),
          loops: Infinity
        });

        return am5.Bullet.new(root, {
          sprite: container
        })
      }
    })

    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" className="w-full h-[200px]"></div>;
};

export default GrowthChart;
