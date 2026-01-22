export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "system-ui" }}>
      <h1>Arduino Virtual Coding Course</h1>

      <p>
        Welcome! This course teaches Arduino coding with virtual wiring,
        drag-and-drop components, and interactive lessons.
      </p>

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
        🚀 More lessons and interactive wiring coming soon.
      </p>
    </main>
  );
}
