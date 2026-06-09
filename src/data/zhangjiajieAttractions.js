const zhangjiajieForestImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Zhangjiajie%20National%20Forest%20Park.jpg?width=1600'
const yuanjiajieImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Stunning%20rock%20formations%20in%20Bailong%20%28%E7%99%BD%E9%BE%99%EF%BC%89Yuanjiajie%20%EF%BC%88%E8%A2%81%E5%AE%B6%E7%95%8C%EF%BC%89scenic%20area.jpg?width=1600'
const tianziImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Misty%20rock%20formations%20in%20Tianzi%20Mountain%20%28%E5%A4%A9%E5%AD%90%E5%B1%B1%EF%BC%89.jpg?width=1600'
const goldenWhipStreamImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/%E6%B9%96%E5%8D%97%20%E5%BC%A0%E5%AE%B6%E7%95%8C%20%E9%87%91%E9%9E%AD%E6%BA%AA%20-%20panoramio.jpg?width=1600'
const tianmenImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Tianmen%20Mountain%20Heaven%20Gate%20arch%20Zhangjiajie.jpg?width=1600'
const glassBridgeImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Zhangjiajie%20Glass%20Bridge%2008.jpg?width=1600'

export const zhangjiajieAttractions = [
  {
    id: 'national-forest-park',
    name: 'Zhangjiajie National Forest Park',
    chineseName: '张家界国家森林公园',
    tagline: 'Towering sandstone pillars rising from a sea of green',
    description: [
      'Zhangjiajie National Forest Park is the landscape that made this corner of Hunan famous: thousands of quartz-sandstone pillars standing above deep valleys, forests, and mist.',
      'The scenery changes constantly with the weather. On clear days, the peaks look sharp and sculptural; after rain, clouds drift through the valleys and make the mountains feel suspended in the air.',
      'Most travelers spend at least two days inside the wider Wulingyuan Scenic Area so they can explore Yuanjiajie, Tianzi Mountain, and Golden Whip Stream without rushing.',
      'Glass elevators, cable cars, shuttle buses, and forest walks make the park surprisingly accessible, while still leaving plenty of room for quiet viewpoints and longer hikes.'
    ],
    image: zhangjiajieForestImage,
    imageLarge: zhangjiajieForestImage,
    rating: 4.9,
    highlight: true
  },
  {
    id: 'yuanjiajie',
    name: 'Yuanjiajie Scenic Area',
    chineseName: '袁家界',
    tagline: 'The dramatic pillar scenery behind Zhangjiajie postcards',
    description: [
      'Yuanjiajie is one of the most iconic sections of Zhangjiajie, known for dense clusters of vertical rock pillars and panoramic viewing platforms.',
      'The area includes famous viewpoints such as the First Bridge Under Heaven and the towering pillar commonly associated with the Avatar Hallelujah Mountain.',
      'It is a strong first stop because the views immediately deliver the classic Zhangjiajie feeling: cliffs, ravines, forest, and stone columns layered into the distance.',
      'Arrive early if you can. The main viewpoints are popular, and morning light often brings softer colors and lower crowds.'
    ],
    image: yuanjiajieImage,
    imageLarge: yuanjiajieImage,
    rating: 4.8,
    highlight: true
  },
  {
    id: 'tianmen-mountain',
    name: 'Tianmen Mountain',
    chineseName: '天门山',
    tagline: 'Heaven Gate, cliff walks, and one unforgettable cable car ride',
    description: [
      'Tianmen Mountain sits closer to Zhangjiajie city and feels very different from the national forest park: steeper, more dramatic, and built around a single mountain experience.',
      'The long cable car ride climbs from the city toward the mountaintop, where glass skywalks, cliffside paths, and forest trails circle the summit.',
      'The highlight is Tianmen Cave, the huge natural arch known as Heaven Gate, reached by a dramatic road of switchbacks and a long stairway.',
      'Because it is separate from Wulingyuan, Tianmen Mountain works well as its own full-day visit before or after the national park.'
    ],
    image: tianmenImage,
    imageLarge: tianmenImage,
    rating: 4.8,
    highlight: true
  },
  {
    id: 'tianzi-mountain',
    name: 'Tianzi Mountain',
    chineseName: '天子山',
    tagline: 'Grand ridgelines, peak forests, and misty viewpoints',
    description: [
      'Tianzi Mountain offers some of the widest views in the Wulingyuan area, with layers of peak forests rolling across the horizon.',
      'The mountain is especially beautiful when clouds move through the valleys below, revealing and hiding the stone columns in slow motion.',
      'Cable cars and shuttle routes make it easy to combine Tianzi Mountain with Yuanjiajie in a full-day route through the national park.',
      'For photographers, this is one of the best places to wait for changing weather and catch the scale of Zhangjiajie from above.'
    ],
    image: tianziImage,
    imageLarge: tianziImage,
    rating: 4.7,
    highlight: false
  },
  {
    id: 'golden-whip-stream',
    name: 'Golden Whip Stream',
    chineseName: '金鞭溪',
    tagline: 'A gentle valley walk below the stone peaks',
    description: [
      'Golden Whip Stream is a peaceful walking route at the base of the mountains, following clear water through forested valleys and cliff scenery.',
      'Unlike the high viewpoints, this trail lets you experience Zhangjiajie from below, looking up at the pillars as they rise from the trees.',
      'The path is relatively easy and is a good balance to cable cars, elevators, and crowded viewing platforms elsewhere in the park.',
      'It is a lovely choice for travelers who want a slower, greener side of Zhangjiajie with birdsong, water, and shaded sections along the way.'
    ],
    image: goldenWhipStreamImage,
    imageLarge: goldenWhipStreamImage,
    rating: 4.6,
    highlight: false
  },
  {
    id: 'grand-canyon-glass-bridge',
    name: 'Zhangjiajie Grand Canyon Glass Bridge',
    chineseName: '张家界大峡谷玻璃桥',
    tagline: 'A glass-bottom bridge suspended above a deep canyon',
    description: [
      'The Zhangjiajie Grand Canyon Glass Bridge is one of the area\'s most talked-about experiences, stretching across a dramatic canyon with transparent panels underfoot.',
      'The bridge is designed for spectacle: open sky, steep canyon walls, and the thrill of seeing the drop below as you walk across.',
      'Many travelers combine the bridge with the Grand Canyon scenic route, which adds waterfalls, walkways, and valley scenery beyond the bridge itself.',
      'This is a good choice if your Zhangjiajie trip has room for one extra adventure outside the main forest park and Tianmen Mountain.'
    ],
    image: glassBridgeImage,
    imageLarge: glassBridgeImage,
    rating: 4.5,
    highlight: false
  }
]

export const zhangjiajieItinerary = [
  {
    day: 'Day 1',
    title: 'Arrive and Warm Up',
    description: 'Arrive in Zhangjiajie, settle in Wulingyuan or the city area, and take an easy evening walk or local dinner before the mountain days begin.'
  },
  {
    day: 'Day 2',
    title: 'Yuanjiajie and Tianzi Mountain',
    description: 'Spend a full day inside Wulingyuan, focusing on the classic pillar viewpoints, shuttle routes, and cable car connections.'
  },
  {
    day: 'Day 3',
    title: 'Golden Whip Stream or Glass Bridge',
    description: 'Choose a gentler forest walk through Golden Whip Stream, or add the Grand Canyon Glass Bridge for a more adrenaline-filled day.'
  },
  {
    day: 'Day 4',
    title: 'Tianmen Mountain',
    description: 'Use a separate day for Tianmen Mountain, including the cable car, cliff walks, Heaven Gate, and the winding mountain road.'
  }
]

export const zhangjiajiePracticalInfo = {
  bestTimeToVisit: 'April to June and September to November offer the most comfortable weather. Mist and rain can create beautiful mountain scenes, but bring layers and waterproof shoes.',
  gettingThere: 'Fly or take high-speed rail to Zhangjiajie. Stay in Wulingyuan for easier access to the national forest park, or in Zhangjiajie city for Tianmen Mountain and transport connections.',
  localTips: [
    'Plan at least three full days if you want both Wulingyuan and Tianmen Mountain.',
    'Book popular tickets and hotels early during Chinese public holidays.',
    'Expect changing weather in the mountains; visibility can shift quickly.',
    'Use the park shuttle system to reduce walking time between major viewpoints.'
  ]
}
