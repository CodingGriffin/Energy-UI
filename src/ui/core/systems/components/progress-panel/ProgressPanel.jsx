import { useRef, useEffect } from "react";
import styles from "./ProgressPanel.module.css";

export const ProgressPanel = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      height / 2
    );
    gradient.addColorStop(0, "#27426A");
    gradient.addColorStop(1, "#0f1e33");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.lineCap = "round";

    const drawArc = (x, y, radius, startAngle, endAngle, color, lineWidth) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    const thickness = 15;
    const innerRadius = height / 2 - 30;
    const innerStartAngle = Math.PI * 0.75;
    const innerEndAngle = Math.PI * 2.25;

    const outerRadius = height / 2 + 30;
    const leftStartAngle = Math.PI * 0.75;
    const leftEndAngle = Math.PI * 1.25;

    const rightTopStart = leftEndAngle + 0.5 * Math.PI;
    const rightTopEnd = 1.98 * Math.PI;

    const rightBottomStart = 0.02 * Math.PI;
    const rightBottomEnd = 0.25 * Math.PI;

    //center
    drawArc(
      centerX,
      centerY,
      innerRadius,
      innerStartAngle,
      innerEndAngle,
      "#FFFFFF",
      thickness
    );

    drawArc(
      centerX,
      centerY,
      innerRadius,
      innerStartAngle,
      innerStartAngle+ (innerEndAngle-innerStartAngle)*props.inner/100,
      "#00FF00",
      thickness
    );

    for (let i = 0; i < 30; i++) {
      let angle =
        innerStartAngle + (i * (innerEndAngle - innerStartAngle)) / 29;

      let sX = centerX + (innerRadius - 15) * Math.cos(angle);
      let sY = centerY + (innerRadius - 15) * Math.sin(angle);
      let eX = centerX + (innerRadius - 20) * Math.cos(angle);
      let eY = centerY + (innerRadius - 20) * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(sX, sY); // Starting point
      ctx.lineTo(eX, eY); // Ending point
      ctx.strokeStyle = "#ecedef";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    ctx.font = "18px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";

    ctx.fillText(
      "0",
      centerX + (innerRadius - 25) * Math.cos(innerStartAngle),
      centerY + (innerRadius - 25) * Math.sin(innerStartAngle)
    );
    ctx.fillText(
      "30",
      centerX + (innerRadius - 25) * Math.cos(innerEndAngle),
      centerY + (innerRadius - 25) * Math.sin(innerEndAngle)
    );

    //left
    drawArc(
      centerX,
      centerY,
      outerRadius,
      leftStartAngle,
      leftEndAngle,
      "#FFFFFF",
      thickness
    );
    drawArc(
      centerX,
      centerY,
      outerRadius,
      leftStartAngle,
      leftStartAngle + (leftEndAngle-leftStartAngle)*props.left/100,
      "#00FF00",
      thickness
    );

    //right top
    drawArc(
      centerX,
      centerY,
      outerRadius,
      rightTopStart,
      rightTopEnd,
      "#FFFFFF",
      thickness
    );
    drawArc(
      centerX,
      centerY,
      outerRadius,
      rightTopStart + (100-props.rightTop)*(rightTopEnd-rightTopStart)/100,
      rightTopEnd,
      "#00FF00",
      thickness
    );

    ctx.font = "18px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText(
      "100%",
      centerX + (outerRadius + 25) * Math.cos(rightTopStart),
      centerY + (outerRadius + 25) * Math.sin(rightTopStart)
    );
    ctx.fillText(
      "0%",
      centerX + (outerRadius + 25) * Math.cos(rightTopEnd),
      centerY + (outerRadius + 25) * Math.sin(rightTopEnd)
    );
    //right bottom
    drawArc(
      centerX,
      centerY,
      outerRadius,
      rightBottomStart,
      rightBottomEnd,
      "#FFFFFF",
      thickness
    );
    drawArc(
      centerX,
      centerY,
      outerRadius,
      rightBottomStart + (100-props.rightBottom)*(rightBottomEnd-rightBottomStart)/100,
      rightBottomEnd,
      "#00FF00",
      thickness
    );

    ctx.font = "18px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText(
      "100%",
      centerX + (outerRadius + 25) * Math.cos(rightBottomStart),
      centerY + (outerRadius + 25) * Math.sin(rightBottomStart)
    );
    ctx.fillText(
      "0%",
      centerX + (outerRadius + 25) * Math.cos(rightBottomEnd),
      centerY + (outerRadius + 25) * Math.sin(rightBottomEnd)
    );

    ctx.font = "25px FontAwesome"; 
    ctx.fillStyle = "#ecedef";
    const iconUnicodeBottom = "\uf240"; 
    ctx.fillText(iconUnicodeBottom, centerX+width*4/9, centerY+height/4); 
    ctx.font = "25px Arial";
    ctx.fillText(props.rightBottom + "%", centerX+width*4/9, centerY+height/4+40); 

    ctx.font = "25px FontAwesome"; 
    ctx.fillStyle = "#ecedef";
    const iconUnicodeTop = "\uf26c"; 
    ctx.fillText(iconUnicodeTop, centerX+width*4/9, centerY-height/4); 
    ctx.font = "25px Arial";
    ctx.fillText(props.rightBottom + "%", centerX+width*4/9, centerY-height/4+40); 
    

    ["0%", "25%", "50%", "75%", "100%"].forEach((label, i) => {
      ctx.font = "18px Arial";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.fillText(
        label,
        centerX +
          (outerRadius + 25) *
            Math.cos(
              leftStartAngle + (i * (leftEndAngle - leftStartAngle)) / 4
            ),
        centerY +
          (outerRadius + 25) *
            Math.sin(leftStartAngle + (i * (leftEndAngle - leftStartAngle)) / 4)
      );
    });

    // Draw the text for meter units
    ctx.font = "48px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText(props.meterUnit, centerX, centerY - 20);

    ctx.font = "18px Arial";
    ctx.fillText("Meter Units", centerX, centerY + 20);
    ctx.fillText(props.time, centerX, centerY + 50);
    ctx.font = "40px Arial";
    ctx.fillText(props.bottom, centerX, centerY + height/2-30);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      style={{ borderRadius: "10px" }}
    />
  );
};
