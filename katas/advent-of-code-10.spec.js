test('happy', () => {
  const input = getInput()
  let cycle = 1
  let X = 1
  const status = {}
  input.forEach((instruction, i) => {
    cycle++
    status[ cycle ] = X
    if (instruction.type === 'noop'){
      return
    }
    cycle++
    X += instruction.value
    status[ cycle ] = X
  })
  // console.log(cycle)
  const result = [ 20, 60, 100, 140, 180, 220 ].reduce((acc, x) => acc + x * status[ x ], 0)
  console.log(result)
})

function getInput(){
  return `
  addx 1
  noop
  addx 2
  addx 5
  addx 3
  noop
  addx -1
  addx 5
  noop
  noop
  addx 5
  noop
  addx 3
  noop
  addx 6
  addx -4
  noop
  noop
  addx 5
  noop
  addx -32
  addx 35
  addx 5
  addx -31
  addx 7
  addx -13
  addx 2
  addx 2
  addx 5
  addx 6
  addx -5
  addx 2
  addx 5
  addx 2
  addx 2
  addx -17
  addx 18
  addx 5
  addx 2
  addx -30
  addx 31
  addx 2
  addx 2
  addx -32
  addx -1
  addx 10
  addx -8
  noop
  noop
  addx 6
  addx 16
  noop
  addx -11
  addx 3
  addx -2
  addx 3
  noop
  addx 6
  noop
  addx -2
  noop
  addx 7
  addx 3
  addx -2
  addx 4
  addx -20
  noop
  addx -14
  addx -2
  addx 6
  addx 2
  addx 3
  noop
  addx 2
  addx -1
  addx 4
  noop
  addx 5
  noop
  addx 2
  addx 3
  addx -2
  addx 3
  noop
  addx 4
  noop
  addx 5
  noop
  addx 2
  addx -24
  addx -15
  addx 17
  addx -10
  addx 2
  addx -5
  addx 6
  noop
  addx 3
  addx 2
  addx 2
  noop
  addx 3
  addx 2
  addx 5
  addx -2
  addx 3
  addx 2
  addx 2
  addx 5
  addx 2
  addx -18
  addx -19
  noop
  addx 1
  addx 2
  addx 5
  addx 3
  noop
  noop
  noop
  noop
  addx 2
  addx 5
  addx 2
  addx 3
  noop
  addx -8
  addx 11
  noop
  noop
  addx 2
  addx 5
  addx 2
  addx 3
  noop
  addx -34
  noop    
  `
    .trim()
    .split('\n')
    .map(x =>
      x.trim() === 'noop' ?
        { type : 'noop' } :
        {
          type  : 'addx',
          value : parseInt(x.trim().split(' ')[ 1 ]),
        })
}

function getDemoInput(){
  return `
addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop
`
    .trim()
    .split('\n')
    .map(x =>
      x === 'noop' ?
        { type : 'noop' } :
        {
          type  : 'addx',
          value : parseInt(x.split(' ')[ 1 ]),
        })
}
