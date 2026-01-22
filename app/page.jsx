export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "system-ui" }}>
      <h1>Arduino Virtual Coding Course</h1>

      <p>
        Welcome! This course teaches Arduino coding with virtual wiring,
        drag-and-drop components, and interactive lessons.
      </p>

      <h2>What you will learn</h2>
      <ul>
        <li>Arduino basics (no hardware required)</li>
        <li>Virtual wiring with buttons and sensors</li>
        <li>Writing and understanding Arduino code</li>
        <li>Building real projects step by step</li>
      </ul>

      <h2>Lesson 1: Blink an LED (Virtual)</h2>
      <pre>
{`void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`}
      </pre>

      <p>
        🚀 More lessons, drag-and-drop wiring, and simulations coming next.
      </p>
    </main>
  );
}
