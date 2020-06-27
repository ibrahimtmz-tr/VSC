const table = {
  '1000': 'M',
  '900': 'CM',
  '500': 'D',
  '400': 'CD',
  '100': 'C',
  '90': 'XC',
  '50': 'L',
  '40': 'XL',
  '10': 'X',
  '9': 'IX',
  '5': 'V',
  '4': 'IV',
  '1': 'I'
}

function intToRoman(int) {
  let result = ''

  let nums = Object.keys(table).sort((a, b) => b - a)


  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]


    while (num <= int) {
      int -= num
      result += table[num]
    }


    if (num <= 0) break
  }


  return (result)
}