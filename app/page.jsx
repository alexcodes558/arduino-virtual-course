import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Arduino Interactive Course Platform with Drag-and-Drop Wiring

const course = [
  { id: 1, title: "Arduino Basics", text: "Arduino reads inputs and controls outputs. You will wire components virtually and see instant results." },
  { id: 2, title: "LED Output", text: "Drag a wire from Pin 13 to the LED to turn it on.", type: "led" },
  { id: 3, title: "Button Input", text: "Connect the button to Pin 2 and GND.", type: "button" },
  { id: 4, title: "Analog Sensor", text: "Connect the sensor to A0.", type: "sensor" },
  { id: 5, title: "Final Project", text: "Combine button + sensor to control the LED.", type: "project" }
];

function DraggableWire({ id, label, onDragStart }) {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(id)}
      className="cursor-grab bg-slate-200 rounded px-3 py-1 text-sm"
    >
      {label}
    </div>
  );
}

function DropPin({ id, activeWire, onDrop }) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(id)}
      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${activeWire ? "border-green-500" : "border-slate-400"}`}
    >
      {id}
    </div>
  );
}

function LED({ connected }) {
  return (
    <div
      className="w-20 h-20 rounded-full mx-auto transition"
      style={{ background: connected ? "red" : "#fee2e2" }}
    />
  );
}

export default function ArduinoCoursePlatform() {
  const [step, setStep] = useState(0);
  const [activeWire, setActiveWire] = useState(null);
  const [connections, setConnections] = useState([]);

  const lesson = course[step];

  const handleDrop = (pin) => {
    if (activeWire) {
      setConnections([...connections, { wire: activeWire, pin }]);
      setActiveWire(null);
    }
  };

  const ledConnected = connections.some(c => c.pin === "13");

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <Card className="max-w-4xl w-full rounded-2xl shadow-xl">
        <CardContent className="p-6 space-y-6">
          <h1 className="text-3xl font-bold">Arduino Virtual Wiring Course</h1>
          <h2 className="text-xl font-semibold">{lesson.title}</h2>
          <p>{lesson.text}</p>

          <div className="grid grid-cols-3 gap-6 items-center">
            <div className="space-y-2">
              <h3 className="font-semibold">Components</h3>
              <DraggableWire id="wire-led" label="LED Wire" onDragStart={setActiveWire} />
              <DraggableWire id="wire-btn" label="Button Wire" onDragStart={setActiveWire} />
              <DraggableWire id="wire-sensor" label="Sensor Wire" onDragStart={setActiveWire} />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Arduino Pins</h3>
              <DropPin id="13" activeWire={activeWire} onDrop={handleDrop} />
              <DropPin id="2" activeWire={activeWire} onDrop={handleDrop} />
              <DropPin id="A0" activeWire={activeWire} onDrop={handleDrop} />
              <DropPin id="GND" activeWire={activeWire} onDrop={handleDrop} />
            </div>

            <div>
              <h3 className="font-semibold text-center">Output</h3>
              <LED connected={ledConnected} />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)}>
              Previous
            </Button>
            <Button disabled={step === course.length - 1} onClick={() => setStep(step + 1)}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
