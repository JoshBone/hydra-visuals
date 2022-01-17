a.show()

a.setScale(4)
a.setBins(6)
a.setCutoff(3)

osc(10, 1, () => (a.fft[2]*3))
  .kaleid(() => (a.fft[2]*8+1))
  .pixelate(100)
  .rotate(1.57)
  .contrast(() => (a.fft[2]*2+1))
  .out()
