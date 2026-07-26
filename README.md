# micro:bit Wheel Rotation

A Microsoft MakeCode extension for converting motor-encoder counts into reel or wheel rotations when using a Kitronik :MOVE Motor setup.

## Blocks

- `get reel rotations with encoder value … and counts per rotation …` divides the encoder count by the calibrated counts-per-rotation value.
- `reset reel encoder` clears the Kitronik motor encoder.
- `stop reel motor` stops forward motor output.

## Install in MakeCode

1. Open <https://makecode.microbit.org/>.
2. Create a project and choose **Extensions**.
3. Paste `https://github.com/wcchun1234/microbit-wheel-rotation` into the search box.
4. Select the extension and ensure the Kitronik :MOVE Motor dependency is available.

## Calibration

Rotate the wheel a known number of complete turns, record the encoder-count change, and divide that change by the number of turns. Pass the resulting counts-per-rotation value to the calculation block.

The calculation currently does not guard against a zero counts-per-rotation value, so validate the value in your MakeCode project before calling the block.

## Development

Extension metadata is stored in `pxt.json`; the block implementation is in `main.ts`.
