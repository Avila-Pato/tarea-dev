import { Result } from "./node_modules/arg/index.d";
import * as fs from "fs";

interface TestCase {
  panelW: number;
  panelH: number;
  roofW: number;
  roofH: number;
  expected: number;
}

interface TestData {
  testCases: TestCase[];
}

function calculatePanels(
  panelWidth: number,
  panelHeight: number,
  roofWidth: number,
  roofHeight: number
): number {
  // Implementa acá tu solución

  //  ## Algunos ejemplos para que revises tu código:

  // - Paneles 1x2 y techo 2x4 ⇒ Caben 4
  // - Paneles 1x2 y techo 3x5 ⇒ Caben 7
  // - Paneles 2x2 y techo 1x10 ⇒ Caben 0

  const DimensionTejado = roofHeight * roofWidth;
  const DimensionPanel = panelHeight * panelWidth;
  const numPanels = Math.floor(DimensionTejado / DimensionPanel);

  if (numPanels > 2) {
    return numPanels;
  } 
  return 0;
}


// Objetivo 2



function main(): void {
  console.log("🐕 Wuuf wuuf wuuf 🐕");
  console.log("================================\n");

  runTests();
}

function runTests(): void {
  const data: TestData = JSON.parse(
    fs.readFileSync("test_cases.json", "utf-8")
  );
  const testCases = data.testCases;

  console.log("Corriendo tests:");
  console.log("-------------------");

  testCases.forEach((test: TestCase, index: number) => {
    const result = calculatePanels(
      test.panelW,
      test.panelH,
      test.roofW,
      test.roofH
    );
    const passed = result === test.expected;

    console.log(`Test ${index + 1}:`);
    console.log(
      `  Panels: ${test.panelW}x${test.panelH}, Roof: ${test.roofW}x${test.roofH}`
    );
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log(`  Status: ${passed ? "✅ PASSED" : "❌ FAILED"}\n`);
  });
}

main();
