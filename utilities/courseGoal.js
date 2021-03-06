const goalOptions = {
  '1-4': '11-12 hours',
  '1-5': '9-10 hours',
  '1-7': '7-8 hours',
  '1-7.5': '6-8 hours',
  '1-8': '5-6 hours',
  '1-10': '5-6 hours',
  '1-12': '4-5 hours',
  '1-15': '3-5 hours',
  '1-16': '2-3 hours',
  '2-4': '23-24 hours',
  '2-5': '18-20 hours',
  '2-7': '13-14 hours',
  '2-7.5': '12-14 hours',
  '2-8': '11-12 hours',
  '2-10': '8-10 hours',
  '2-12': '8-10 hours',
  '2-15': '6-8 hours',
  '2-16': '5-6 hours',
  '3-4': '34-36 hours',
  '3-5': '27-29 hours',
  '3-7': '19-22 hours',
  '3-7.5': '19-22 hours',
  '3-8': '16-18 hours',
  '3-10': '14-16 hours',
  '3-12': '11-13 hours',
  '3-15': '9-12 hours',
  '3-16': '8-10 hours',
  '4-4': '45-47 hours',
  '4-5': '36-38 hours',
  '4-7': '26-27 hours',
  '4-7.5': '25-27 hours',
  '4-8': '22-24 hours',
  '4-10': '18-20 hours',
  '4-12': '15-17 hours',
  '4-15': '12-15 hours',
  '4-16': '11-13 hours',
  '5-4': '56-58 hours',
  '5-5': '45-47 hours',
  '5-7': '32-35 hours',
  '5-7.5': '32-35 hours',
  '5-8': '28-30 hours',
  '5-10': '23-25 hours',
  '5-12': '19-21 hours',
  '5-15': '15-18 hours',
  '5-16': '14-16 hours'
}

export default function findGoal(credits, length) {
  const key = `${credits}-${length}`
  return goalOptions[key]
}
