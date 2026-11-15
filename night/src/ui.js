import './style.css';
import { CAMPUS, MEMORY_TITLES } from '../../shared/campus-layout.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || 0));
const clock = value => `${Math.floor((value || 0) / 60).toString().padStart(2, '0')}:${Math.floor((value || 0) % 60).toString().padStart(2, '0')}`;
const LANGUAGE_KEY = 'gbu-campus-night-language';
const COPY = {
  en: {
    languageButton: '中文', languageTitle: 'Switch to Chinese',
    pageTitle: 'GBU Campus · After the Last Bell',
    metaDescription: 'After the Last Bell — a fictional mystery on a model-based GBU campus. Cross the water court, teaching block, sports track and dormitory arcade to recover four memories.',
    mainLabel: 'After the Last Bell, a single-player haunted campus game',
    sceneLabel: '3D campus. W A S D to walk, drag to look, Shift to sprint, Space to kick, E to interact.',
    brandLabel: 'GBU Campus — return to night title', brandUniversity: 'Great Bay University',
    experiences: 'Campus experiences', settings: 'Game settings',
    navDay: 'Day tour', navNight: 'Haunted night',
    soundOn: 'Mute sound', soundOff: 'Enable sound', toggleSound: 'Toggle sound',
    qualityTitle: 'Change rendering quality', mapOpen: 'Open campus map', mapClose: 'Close campus map',
    pause: 'Pause game', titleEyebrow: 'A SINGLE-PLAYER CAMPUS MYSTERY', titleHeading: 'After the<br>Last <em>Bell.</em>',
    titleStory: 'Everyone left something behind.<br>Tonight, the campus remembers.',
    titleDescription: 'From the water court to the sports track, four memories wait across GBU. Outrun the missing students, kick free when they close in, and return to the plaza gate.',
    start: 'Begin the night', demo: 'Watch demo', loading: 'Waking the campus…',
    objectiveFind: 'Recover four campus memories', objectiveReturn: 'Return the memories to the plaza gate',
    hint: 'M · Campus map. Follow the promenade, garden paths and rear arcade.',
    memoryRecovered: 'recovered', memoryMissing: 'missing', chaseNone: 'No footsteps behind you',
    chaseOne: 'student is chasing', chaseMany: 'students are chasing', kickReady: 'Kick ready',
    kickCooldown: 'Kick', torchOn: 'Torch on', torchOff: 'Torch off', lightOn: 'Light on', lightOff: 'Light off',
    safety: 'Beyond the lanterns', safe: 'Lantern refuge · recovering', noiseHigh: 'The Listener can hear you',
    noiseMid: 'Footsteps in the night', noiseLow: 'Quiet footsteps', bellReady: 'Decoy bell ready', bellCooldown: 'Bell returns in',
    demoCaption: 'Walking the same paths you can explore.', focusTitle: 'A memory remains', focusInstruction: 'Hold E to listen.',
    endEyebrowWin: 'DAWN FINDS ITS WAY HOME', endEyebrowLost: 'THE NIGHT TOOK ITS TOLL', endEyebrowChased: 'THE LISTENER CAME TOO CLOSE',
    endTitleWin: 'The night is complete.', endTitleLost: 'You are still here.', endDescriptionWin: 'Four memories, returned. The last bell fades, the gate opens, and the campus can finally rest.',
    endDescriptionLost: 'Your recovered memories are safe. Outrun the students or face them and kick. Return to a lantern, take a breath, then try again.',
    retryWin: 'Walk the night again ↗', retryLost: 'Try again ↗', mapModelRear: 'MODEL REAR', mapModelFront: 'MODEL FRONT',
    titleDetailsSafety: 'Lantern light means safety', titleDetailsListener: 'The Listener follows noise', titleDetailsPlaces: 'Four places · Four different challenges',
    fieldNotes: 'FIELD NOTES / 00:13', location: 'Some places<br>never quite sleep.', footerStory: 'Based on the campus model · Fictional story · Unofficial experience', footerPlay: 'Headphones recommended · Play at your pace',
    gameStatus: 'Game status', memoriesRecovered: 'MEMORIES RECOVERED', lostMemories: 'Lost memories', blood: 'Blood', composure: 'Composure', torch: 'Torch', noiseLevel: 'Noise level',
    move: 'move', dragLook: 'drag to look', holdInteract: 'hold to interact', torchKey: 'torch', bellKey: 'bell', runKey: 'run', kickKey: 'kick', nearby: 'Nearby interaction',
    low: 'Low', middle: 'Middle', high: 'High', liveDemo: 'LIVE DEMO', takeControl: 'Take control', mapTitle: 'Across the campus', mapEyebrow: 'NIGHT PORTER’S PLAN', mapAria: 'Model-relative campus plan. Towers and west teaching block are left of the curved building. Sports hall, track and dormitories are on the right. Plaza gate is at the front.',
    legendYou: 'You', legendSafe: 'Safe lantern', legendRecovered: 'Recovered', touchSprint: 'Sprint', touchForward: 'Walk forward', touchLeft: 'Walk left', touchBackward: 'Walk backward', touchRight: 'Walk right', touchKick: 'Kick zombie ahead', touchTorch: 'Toggle torch', touchBell: 'Ring decoy bell', touchInteract: 'Hold to interact',
    pauseEyebrow: 'TAKE A BREATH', pauseTitle: 'The night can wait.', pauseDescription: 'The campus is paused. Your memories are safe.', resume: 'Continue exploring ↗', returnTitle: 'Return to title', returnDay: 'Return to day tour', pauseWalk: 'Walk · arrows also work', pauseLook: 'Look around', pauseRitual: 'Hold to perform a ritual', pauseTorch: 'Toggle your torch', pauseRun: 'Outrun zombies · noise attracts the Listener', pauseKick: 'Kick the zombie ahead to knock it down', pauseBell: 'Ring a decoy bell', pauseNotes: 'Play the residence notes', pauseMap: 'Open the campus map',
    endMemories: 'Memories returned', endTime: 'Time in the night', trackLabel: 'TRACK', units: 'units', seconds: 's',
    mapGate: 'PLAZA GATE / EXIT', mapTip: 'Game paused while this map is open.<br>Recover all four, then return to the plaza gate.'
  },
  zh: {
    languageButton: 'EN', languageTitle: '切换到英文',
    pageTitle: 'GBU 校园 · 最后的铃响',
    metaDescription: '最后的铃响——一场发生在 GBU 校园模型中的虚构谜案。穿过水庭、教学楼、运动场和宿舍拱廊，找回四段记忆。',
    mainLabel: '最后的铃响，一场单人校园惊悚游戏',
    sceneLabel: '3D 校园。W A S D 行走，拖动视角，Shift 奔跑，空格踢击，E 互动。',
    brandLabel: 'GBU 校园——返回夜间标题页', brandUniversity: '大湾大学',
    experiences: '校园体验', settings: '游戏设置',
    navDay: '白天导览', navNight: '夜间探险',
    soundOn: '关闭声音', soundOff: '开启声音', toggleSound: '声音开关',
    qualityTitle: '切换画面质量', mapOpen: '打开校园地图', mapClose: '关闭校园地图',
    pause: '暂停游戏', titleEyebrow: '单人校园谜案', titleHeading: '最后一声<br><em>铃响。</em>',
    titleStory: '每个人都留下了一些东西。<br>今晚，校园记起了一切。',
    titleDescription: '从水庭到运动场，GBU 校园的四段记忆等待被找回。躲开失踪的学生，在他们靠近时踢开他们，最后回到广场门。',
    start: '开始夜晚', demo: '观看演示', loading: '唤醒校园中……',
    objectiveFind: '找回四段校园记忆', objectiveReturn: '把记忆带回广场门',
    hint: 'M · 打开校园地图。沿主路、花园小径和后侧拱廊前进。',
    memoryRecovered: '已找回', memoryMissing: '未找回', chaseNone: '身后没有脚步声',
    chaseOne: '名学生正在追赶', chaseMany: '名学生正在追赶', kickReady: '可以踢击',
    kickCooldown: '踢击', torchOn: '手电筒开启', torchOff: '手电筒关闭', lightOn: '亮灯', lightOff: '关灯',
    safety: '离开灯笼范围', safe: '灯笼庇护 · 正在恢复', noiseHigh: '聆听者听见你了',
    noiseMid: '夜色中的脚步声', noiseLow: '安静的脚步', bellReady: '诱饵铃待命', bellCooldown: '铃声将在',
    demoCaption: '沿着你可以探索的同一条路线行走。', focusTitle: '这里还留着一段记忆', focusInstruction: '按住 E 倾听。',
    endEyebrowWin: '黎明找到了回家的路', endEyebrowLost: '夜晚留下了代价', endEyebrowChased: '聆听者靠得太近了',
    endTitleWin: '夜晚已经完成。', endTitleLost: '你还留在这里。', endDescriptionWin: '四段记忆都已归还。最后的钟声渐远，大门打开，校园终于可以休息。',
    endDescriptionLost: '你找回的记忆仍然安全。甩开学生，或面对他们并踢退。回到灯笼旁喘口气，再试一次。',
    retryWin: '再走一次夜路 ↗', retryLost: '再试一次 ↗', mapModelRear: '模型后侧', mapModelFront: '模型前侧',
    titleDetailsSafety: '灯笼光亮代表安全', titleDetailsListener: '聆听者会追随声音', titleDetailsPlaces: '四个地点 · 四种挑战',
    fieldNotes: '现场记录 / 00:13', location: '有些地方<br>总也无法真正入睡。', footerStory: '基于校园模型 · 虚构故事 · 非官方体验', footerPlay: '建议佩戴耳机 · 按自己的节奏游玩',
    gameStatus: '游戏状态', memoriesRecovered: '已找回的记忆', lostMemories: '遗失的记忆', blood: '生命值', composure: '镇定值', torch: '手电筒', noiseLevel: '噪声等级',
    move: '移动', dragLook: '拖动视角', holdInteract: '按住互动', torchKey: '手电筒', bellKey: '铃声', runKey: '奔跑', kickKey: '踢击', nearby: '附近互动',
    low: '低音', middle: '中音', high: '高音', liveDemo: '演示中', takeControl: '接管操作', mapTitle: '穿过校园', mapEyebrow: '夜间管理员的路线图', mapAria: '以模型为参照的校园路线图。塔楼和西侧教学楼在弧形建筑左侧；运动馆、跑道和宿舍在右侧；广场门位于前方。',
    legendYou: '你', legendSafe: '安全灯笼', legendRecovered: '已找回', touchSprint: '奔跑', touchForward: '向前走', touchLeft: '向左走', touchBackward: '向后走', touchRight: '向右走', touchKick: '踢开前方学生', touchTorch: '切换手电筒', touchBell: '敲响诱饵铃', touchInteract: '按住互动',
    pauseEyebrow: '喘口气', pauseTitle: '夜晚可以等一等。', pauseDescription: '校园已暂停。你的记忆仍然安全。', resume: '继续探索 ↗', returnTitle: '返回标题', returnDay: '返回白天导览', pauseWalk: '行走 · 方向键也可用', pauseLook: '环顾四周', pauseRitual: '按住进行仪式', pauseTorch: '切换手电筒', pauseRun: '甩开学生 · 噪声会吸引聆听者', pauseKick: '踢倒前方学生', pauseBell: '敲响诱饵铃', pauseNotes: '演奏宿舍旋律', pauseMap: '打开校园地图',
    endMemories: '归还的记忆', endTime: '夜晚用时', trackLabel: '跑道', units: '单位', seconds: '秒',
    mapGate: '广场门 / 出口', mapTip: '地图打开时游戏已暂停。<br>找回全部四段记忆，再回到广场门。'
  }
};
const readLanguage = () => {
  try { return localStorage.getItem(LANGUAGE_KEY) === 'zh' ? 'zh' : 'en'; }
  catch { return 'en'; }
};
const MEMORY_COPY = {
  en: { library: 'The corridor whisper', greenhouse: 'The water reflection', observatory: 'The final lap', residence: 'The room-call melody' },
  zh: { library: '走廊低语', greenhouse: '水面的倒影', observatory: '最后一圈', residence: '房间呼唤的旋律' }
};
const STATION_COPY = {
  en: { library: 'West teaching block', greenhouse: 'Water court', observatory: 'Sports hall', residence: 'Dormitory arcade' },
  zh: { library: '西侧教学楼', greenhouse: '水庭', observatory: '运动馆', residence: '宿舍拱廊' }
};
const RUNTIME_ZH = new Map([
  ['Lanterns restore your light and composure.', '灯笼会恢复手电筒电量和镇定值。'],
  ['A borrowed bell. Keep moving while it listens.', '借来的铃声会替你吸引注意。趁它聆听时继续移动。'],
  ['The echo breaks. Hold E to hear the notes again.', '回声中断了。按住 E，再听一次旋律。'],
  ['The Listener is close. Face it with your light, or reach a lantern.', '聆听者就在附近。用手电筒面对它，或赶到灯笼旁。'],
  ['The students caught you. Your recovered memories are safe.', '学生抓住了你。已经找回的记忆仍然安全。'],
  ['The Listener found your footsteps. Your recovered memories are safe.', '聆听者循着脚步找到了你。已经找回的记忆仍然安全。'],
  ['The lap faded. Return to the sports hall and hold E to try again.', '这一圈跑道挑战已失效。回到运动馆并按住 E 重试。'],
  ['Lap complete. Return to the sports hall and hold E to recover its memory.', '跑道挑战完成。回到运动馆并按住 E 找回这段记忆。'],
  ['Final lap started. Follow the blue beacons. Shift to sprint; M shows your route.', '最后一圈开始。跟随蓝色信标前进。按 Shift 奔跑，按 M 查看路线。'],
  ['You are in control. M opens your campus map.', '现在由你来操作。按 M 打开校园地图。'],
  ['GBU students · keep your distance.', 'GBU 学生 · 请保持距离。'],
  ['Space · Push them back!', '空格 · 把他们踢开！'],
  ['The scattered limbs crawl back together. Make distance.', '散落的肢体正在重新拼合。赶紧拉开距离。'],
  ['Bitten · −18 blood. Space to kick. Shift to outrun.', '被咬了 · 生命值 −18。按空格踢击，按 Shift 奔跑甩开它们。'],
  ['Knocked down. Keep moving — they will get back up.', '已被踢倒。继续移动——它们还会重新站起来。'],
  ['Waking the campus…', '正在唤醒校园……'],
  ['Opening the campus after dark', '正在打开入夜后的校园'],
  ['Preparing the students and moonlight', '正在准备学生与月光'],
  ['The campus is ready', '校园已准备好'],
  ['The campus could not load. Reload this page to try again.', '校园加载失败。请刷新页面重试。'],
  ['Missing students patrol the campus. A bite costs blood.', '失踪的学生正在校园巡逻。被咬会损失生命值。'],
  ['Space: push them away with your running shoe. Their limbs slowly reassemble.', '空格：用奔跑的力量把他们踢开。他们的肢体会慢慢重新拼合。'],
  ['Amber lanterns restore blood, battery and composure.', '琥珀色灯笼会恢复生命值、电量和镇定值。'],
  ['A short rest before the next crossing.', '在前往下一个地点前短暂休息。'],
  ['The water court sits inside the curved building. Follow the front promenade.', '水庭位于弧形建筑内部。沿前侧主路前进。'],
  ['The curved ribbons embrace the garden. The first memory waits by the water.', '弧形建筑环抱着花园。第一段记忆正在水边等待。'],
  ['Face the marker with your light on. Stand still and hold E.', '打开手电筒面对标记，站稳后按住 E。'],
  ['Further west, the teaching block opens beneath horizontal louvers.', '再向西走，教学楼就在横向百叶窗下方。'],
  ['Light off. Stand still and hold E to hear the corridor whisper.', '关闭手电筒，站稳后按住 E，听见走廊的低语。'],
  ['The sports hall is east of the plaza, beside the blue track.', '运动馆在广场东侧，紧邻蓝色跑道。'],
  ['Hold E to start the final lap, then run its four blue checkpoints.', '按住 E 开始最后一圈，然后跑过四个蓝色检查点。'],
  ['Use the side lane behind the sports hall to reach the orange dormitory blocks.', '沿运动馆后方的侧道前往橙色宿舍楼。'],
  ['The dormitory arcade holds a three-note room call.', '宿舍拱廊里藏着三音的房间呼唤。'],
  ['Hold E to hear the call. Repeat it with 1, 2 and 3.', '按住 E 听见呼唤，再用 1、2、3 重复旋律。'],
  ['Four memories recovered. Return along the flag plaza to the entry gate.', '四段记忆都已找回。沿旗帜广场返回入口。'],
  ['Hold E to return the memories and end the night.', '按住 E 归还记忆，结束夜晚。']
]);
function translateRuntime(value, language, context = {}) {
  const text = String(value ?? '');
  if (language !== 'zh' || !text) return text;
  if (context.id === 'gate' && context.type === 'focusTitle') return '广场门';
  if (context.id && context.type === 'focusTitle' && MEMORY_COPY.zh[context.id]) return MEMORY_COPY.zh[context.id];
  if (context.type === 'navigation') {
    const station = Object.entries(STATION_COPY.en).find(([, title]) => title === text);
    if (station) return STATION_COPY.zh[station[0]];
    if (text === 'Plaza gate') return '广场门';
    const beacon = text.match(/^Track beacon (\d+) \/ (\d+)$/);
    if (beacon) return `跑道信标 ${beacon[1]} / ${beacon[2]}`;
  }
  if (context.type === 'focusInstruction') {
    const memories = text.match(/^(\d+) memories are still waiting\. M shows the campus routes\.$/);
    if (memories) return `还有 ${memories[1]} 段记忆等待找回。按 M 查看校园路线。`;
    if (text === 'This memory is safe. Follow the next thread.') return '这段记忆已经安全。沿着下一条线索前进。';
    if (text === 'The plaza gate') return '广场门';
    const notes = text.match(/^The room sings: (I|II|III)$/);
    if (notes) return `房间正在歌唱：${notes[1]}`;
    const seconds = text.match(/^Reach the blue track beacons in order\. (\d+) seconds remain\.$/);
    if (seconds) return `按顺序抵达蓝色跑道信标。还剩 ${seconds[1]} 秒。`;
    if (text === 'Hold E to start the final lap. Reach four blue track beacons in 30 seconds, then return here.') return '按住 E 开始最后一圈。30 秒内跑过四个蓝色跑道信标，再回到这里。';
    if (text === 'Lap restored. Hold E to recover the final lap.') return '跑道已恢复。按住 E 找回最后一圈记忆。';
  }
  const remembered = text.match(/^(.+?) — remembered\. (\d+) remain\.$/);
  if (remembered) {
    const title = Object.entries(MEMORY_COPY.en).find(([, name]) => name === remembered[1]);
    return `${title ? MEMORY_COPY.zh[title[0]] : remembered[1]} · 已记起。还剩 ${remembered[2]} 段。`;
  }
  const returned = text.match(/^(.+?) — remembered\. Return to the plaza gate\.$/);
  if (returned) {
    const title = Object.entries(MEMORY_COPY.en).find(([, name]) => name === returned[1]);
    return `${title ? MEMORY_COPY.zh[title[0]] : returned[1]} · 已记起。回到广场门。`;
  }
  const checkpoint = text.match(/^Checkpoint (\d+) \/ (\d+)\. Follow the next blue beacon\.$/);
  if (checkpoint) return `检查点 ${checkpoint[1]} / ${checkpoint[2]}。跟随下一个蓝色信标。`;
  const demoLap = text.match(/^Final lap: blue beacon (\d+) of 4\. Sprint to beat the clock\.$/);
  if (demoLap) return `最后一圈：第 ${demoLap[1]} 个蓝色信标，共 4 个。快跑，争取在时间内完成。`;
  return RUNTIME_ZH.get(text) || text;
}
const MAP_SCALE = 2;
const mapPoint = ({x,z}) => ({x:24+(x-CAMPUS.bounds.minX)*MAP_SCALE,y:42+(z-CAMPUS.bounds.minZ)*MAP_SCALE});
const memoryOrder = ['library','greenhouse','observatory','residence'];

function drawCampusMap(language) {
  const copy = COPY[language];
  const svg = document.querySelector('.campus-map');
  const layer = document.getElementById('map-layout');
  const point = (x,z) => {const p=mapPoint({x,z});return `${p.x},${p.y}`;};
  const footprints = CAMPUS.buildings.map(building => {
    const p=mapPoint(building),w=building.w*MAP_SCALE,d=building.d*MAP_SCALE;
    const shape=building.id==='crescent'
      ? `<path d="M${p.x-w/2},${p.y+d/2} Q${p.x-w*.63},${p.y-d*.60} ${p.x},${p.y-d/2} Q${p.x+w*.63},${p.y-d*.60} ${p.x+w/2},${p.y+d/2} L${p.x+w/2-12},${p.y+d/2-6} Q${p.x+w*.45},${p.y-d*.30} ${p.x},${p.y-d/2+19} Q${p.x-w*.45},${p.y-d*.30} ${p.x-w/2+12},${p.y+d/2-6} Z"/>`
      : `<rect x="${p.x-w/2}" y="${p.y-d/2}" width="${w}" height="${d}" rx="2"/>`;
    const labels=language==='zh'
      ? {towers:'塔楼',research:'阶梯塔',arcade:'后侧拱廊',academic:'东侧教学楼',crescent:'弧形建筑'}
      : {towers:'TOWERS',research:'STEPPED TOWER',arcade:'REAR ARCADE',academic:'EAST TEACHING',crescent:'CURVED BUILDING'};
    return `<g class="map-footprint" data-campus-building="${building.id}"><title>${building.label}</title>${shape}${labels[building.id]?`<text x="${p.x}" y="${p.y+(building.id==='crescent'?0:3)}">${labels[building.id]}</text>`:''}</g>`;
  }).join('');
  const paths=CAMPUS.paths.map(path=>`<polyline points="${path.map(([x,z])=>point(x,z)).join(' ')}"/>`).join('');
  const safe=CAMPUS.safeZones.map(zone=>{const p=mapPoint(zone);return `<circle cx="${p.x}" cy="${p.y}" r="4"/>`;}).join('');
  const stations=memoryOrder.map((id,index)=>{const station=CAMPUS.stations.find(s=>s.id===id),p=mapPoint(station.position),stationTitle=STATION_COPY[language][id]||station.title,memoryTitle=MEMORY_COPY[language][id]||MEMORY_TITLES[id];return `<g data-map-memory="${id}" class="map-building"><title>${stationTitle}: ${memoryTitle}</title><circle cx="${p.x}" cy="${p.y}" r="10"/><text x="${p.x}" y="${p.y+3.5}">${index+1}</text></g>`;}).join('');
  const gate=mapPoint(CAMPUS.exit),track=mapPoint(CAMPUS.track),water=mapPoint(CAMPUS.stations.find(s=>s.id==='greenhouse').position);
  layer.innerHTML=`<g class="map-paths">${paths}</g>${footprints}<ellipse class="map-water" cx="${water.x}" cy="${water.y-7}" rx="24" ry="12"/><rect class="map-track" x="${track.x-CAMPUS.track.w}" y="${track.y-CAMPUS.track.d}" width="${CAMPUS.track.w*2}" height="${CAMPUS.track.d*2}" rx="22"/><g class="map-lanterns">${safe}</g>${stations}<g class="map-gate"><path d="M${gate.x-12},${gate.y-5}v10m24-10v10m-24-5h24"/><text x="${gate.x}" y="${gate.y+22}">${copy.mapGate}</text></g><text x="315" y="23" class="map-orientation">${copy.mapModelRear}</text><text x="145" y="325" class="map-orientation">${copy.mapModelFront}</text>`;
  svg.setAttribute('viewBox','0 0 630 340');
  const list=document.getElementById('map-memory-list');
  list.innerHTML=memoryOrder.map((id,index)=>{const station=CAMPUS.stations.find(s=>s.id===id),stationTitle=STATION_COPY[language][id]||station.title;return `<li data-map-entry="${id}"><b>${index+1}</b><span>${stationTitle}<small>${MEMORY_COPY[language][id]||MEMORY_TITLES[id]}</small></span></li>`;}).join('');
}

export function createUI(actions) {
  const language = readLanguage();
  drawCampusMap(language);
  const ids = ['ui','title-screen','start-button','demo-button','loading','loading-label','loading-progress','hud','objective','hint','navigation-label','track-status','track-progress','track-clock','memory-count','memory-list','safety-label','health-fill','health-value','bite-effect','chase-label','kick-label','composure-fill','composure-value','battery-fill','battery-value','torch-label','noise-label','noise-bars','bell-label','reticle','event-message','focus-prompt','focus-title','focus-instruction','ritual-progress','note-controls','demo-strip','demo-caption','map-panel','map-player','map-ghost','map-target','map-button','pause-button','pause-screen','end-screen','end-eyebrow','end-title','end-description','end-memories','end-time','retry-button','sound-button','quality-label','touch-controls','touch-torch','touch-interact','touch-kick','touch-sprint','scene','language-button'];
  const el = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
  const cache = new WeakMap();
  let currentLanguage = language;
  let lastMode = null;
  let state = {};
  let heldInteract = false;
  let heldSprint = false;
  let memoryNodes = {};
  let mapNodes = {};
  let mapEntries = {};
  const directions = new Set();
  const coarse = matchMedia('(pointer: coarse)');
  const refreshMapReferences = () => {
    memoryNodes = Object.fromEntries([...el['memory-list'].children].map(node => [node.dataset.memory,node]));
    mapNodes = Object.fromEntries([...document.querySelectorAll('[data-map-memory]')].map(node => [node.dataset.mapMemory,node]));
    mapEntries = Object.fromEntries([...document.querySelectorAll('[data-map-entry]')].map(node => [node.dataset.mapEntry,node]));
  };

  function text(node, value) {
    value = String(value ?? '');
    if (cache.get(node) !== value) { node.textContent = value; cache.set(node, value); }
  }
  function setTrailingText(node, value) {
    if (!node) return;
    const textNode = [...node.childNodes].reverse().find(child => child.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.nodeValue = ` ${value}`;
    else node.append(document.createTextNode(value));
  }
  function applyLanguage() {
    const copy = COPY[currentLanguage];
    const set = (selector, value) => text(document.querySelector(selector), value);
    const setHtml = (selector, value) => { const node = document.querySelector(selector); if (node) node.innerHTML = value; };
    document.documentElement.lang = currentLanguage;
    document.title = copy.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', copy.metaDescription);
    attr(el.ui, 'aria-label', copy.mainLabel);
    attr(el.scene, 'aria-label', copy.sceneLabel);
    const canvas = el.scene.querySelector('canvas');
    if (canvas) attr(canvas, 'aria-label', copy.sceneLabel);
    attr(document.getElementById('home-mark'), 'aria-label', copy.brandLabel);
    setTrailingText(document.querySelector('#home-mark span'), 'Campus');
    text(document.querySelector('#home-mark small'), copy.brandUniversity);
    attr(document.querySelector('.campus-modes'), 'aria-label', copy.experiences);
    attr(document.querySelector('.utility-nav'), 'aria-label', copy.settings);
    const nav = document.querySelectorAll('.campus-modes span');
    if (nav[0]) text(nav[0], copy.navDay);
    if (nav[1]) text(nav[1], copy.navNight);
    text(el['language-button'].querySelector('span') || el['language-button'], copy.languageButton);
    attr(el['language-button'], 'title', copy.languageTitle);
    attr(el['language-button'], 'aria-label', copy.languageTitle);
    attr(el['sound-button'], 'title', copy.toggleSound);
    attr(document.getElementById('quality-button'), 'title', copy.qualityTitle);
    attr(el['map-button'], 'title', copy.mapOpen);
    attr(document.getElementById('map-close'), 'title', copy.mapClose);
    attr(document.getElementById('map-close'), 'aria-label', copy.mapClose);
    attr(el['pause-button'], 'title', copy.pause);
    setTrailingText(el['start-button'], copy.start);
    setTrailingText(el['demo-button'], copy.demo);
    setTrailingText(document.querySelector('.title-copy .eyebrow'), copy.titleEyebrow);
    const gameTitle = document.getElementById('game-title');
    if (gameTitle) gameTitle.innerHTML = copy.titleHeading;
    setTrailingText(document.getElementById('resume-button'), copy.resume);
    setTrailingText(document.getElementById('pause-home-button'), copy.returnTitle);
    setTrailingText(document.getElementById('end-home-button'), copy.returnTitle);
    const titleStory = document.querySelector('.title-copy .title-story');
    if (titleStory) titleStory.innerHTML = copy.titleStory;
    const titleDescription = document.querySelector('.title-copy .title-description');
    if (titleDescription) titleDescription.textContent = copy.titleDescription;
    setTrailingText(document.querySelector('.title-details span:nth-child(1)'), copy.titleDetailsSafety);
    setTrailingText(document.querySelector('.title-details span:nth-child(2)'), copy.titleDetailsListener);
    text(document.querySelector('.title-details span:nth-child(3)'), copy.titleDetailsPlaces);
    text(document.querySelector('.title-location span'), copy.fieldNotes);
    setHtml('.title-location div', copy.location);
    const footer = document.querySelectorAll('.title-footer span');
    if (footer[0]) text(footer[0], copy.footerStory);
    if (footer[1]) setTrailingText(footer[1], copy.footerPlay);
    text(el['loading-label'], copy.loading);
    setTrailingText(document.querySelector('.objective-block .eyebrow'), copy.memoriesRecovered);
    attr(el.hud, 'aria-label', copy.gameStatus);
    attr(el['memory-list'], 'aria-label', copy.lostMemories);
    const meterLabels = document.querySelectorAll('.meter-row > span');
    if (meterLabels[0]) text(meterLabels[0], copy.blood);
    if (meterLabels[1]) text(meterLabels[1], copy.composure);
    text(el['torch-label'], copy.torch);
    attr(el['noise-bars'], 'aria-label', copy.noiseLevel);
    const quick = document.querySelectorAll('.quick-controls > span');
    [copy.move, copy.dragLook, copy.holdInteract, copy.torchKey, copy.bellKey, copy.runKey, copy.kickKey].forEach((value, index) => { if (quick[index]) setTrailingText(quick[index], value); });
    attr(el['focus-prompt'], 'aria-label', copy.nearby);
    text(document.querySelector('#focus-prompt .interaction-key'), currentLanguage === 'zh' ? '按住 E' : 'HOLD E');
    const notes = document.querySelectorAll('#note-controls button span');
    [copy.low, copy.middle, copy.high].forEach((value, index) => { if (notes[index]) text(notes[index], value); });
    setTrailingText(document.querySelector('.demo-label'), copy.liveDemo);
    setTrailingText(el['take-control-button'], copy.takeControl);
    attr(document.querySelector('.map-panel'), 'aria-label', copy.mapTitle);
    text(document.getElementById('map-title'), copy.mapTitle);
    text(document.querySelector('.map-heading .eyebrow'), copy.mapEyebrow);
    attr(document.querySelector('.campus-map'), 'aria-label', copy.mapAria);
    const mapTip = document.querySelector('.map-tip');
    if (mapTip) mapTip.innerHTML = copy.mapTip;
    const legend = document.querySelectorAll('.map-legend > span');
    [copy.legendYou, copy.legendSafe, copy.legendRecovered].forEach((value, index) => { if (legend[index]) setTrailingText(legend[index], value); });
    attr(document.getElementById('touch-controls'), 'aria-label', currentLanguage === 'zh' ? '触屏控制' : 'Touch controls');
    attr(document.getElementById('touch-sprint'), 'aria-label', copy.touchSprint);
    attr(document.getElementById('touch-kick'), 'aria-label', copy.touchKick);
    attr(document.getElementById('touch-torch'), 'aria-label', copy.touchTorch);
    attr(document.getElementById('touch-bell'), 'aria-label', copy.touchBell);
    attr(document.getElementById('touch-interact'), 'aria-label', copy.touchInteract);
    document.querySelectorAll('[data-direction]').forEach(button => attr(button, 'aria-label', copy[{forward:'touchForward',left:'touchLeft',back:'touchBackward',right:'touchRight'}[button.dataset.direction]]));
    text(document.querySelector('#pause-screen .eyebrow'), copy.pauseEyebrow);
    text(document.getElementById('pause-title'), copy.pauseTitle);
    text(document.querySelector('#pause-screen .modal-copy > p:not(.eyebrow)'), copy.pauseDescription);
    const pauseControls = document.querySelectorAll('.pause-controls > div span');
    [copy.pauseWalk, copy.pauseLook, copy.pauseRitual, copy.pauseTorch, copy.pauseRun, copy.pauseKick, copy.pauseBell, copy.pauseNotes, copy.pauseMap].forEach((value, index) => { if (pauseControls[index]) text(pauseControls[index], value); });
    setTrailingText(document.querySelector('#pause-screen .campus-return-link'), copy.returnDay);
    const endStats = document.querySelectorAll('.end-stats span');
    if (endStats[0]) text(endStats[0], copy.endMemories);
    if (endStats[1]) text(endStats[1], copy.endTime);
    setTrailingText(document.querySelector('#end-screen .campus-return-link'), copy.returnDay);
    refreshMapReferences();
    for (const [id, node] of Object.entries(memoryNodes)) text(node.querySelector('span'), MEMORY_COPY[currentLanguage][id] || MEMORY_TITLES[id] || id);
  }
  function setLanguage(next) {
    currentLanguage = next === 'zh' ? 'zh' : 'en';
    try { localStorage.setItem(LANGUAGE_KEY, currentLanguage); } catch {}
    drawCampusMap(currentLanguage);
    applyLanguage();
    if (Object.keys(state).length) update(state);
  }

  function show(node, visible) {
    if (node.hasAttribute('hidden') === visible) node.toggleAttribute('hidden', !visible);
    const aria = visible ? 'false' : 'true';
    if (node.getAttribute('aria-hidden') !== aria) node.setAttribute('aria-hidden', aria);
  }
  function attr(node, name, value) {
    value = String(value);
    if (node.getAttribute(name) !== value) node.setAttribute(name, value);
  }
  function width(node, value) {
    const next = `${Math.round(clamp(value, 0, 100))}%`;
    if (node.style.width !== next) node.style.width = next;
  }
  function invoke(name, ...args) { if (typeof actions[name] === 'function') actions[name](...args); }
  function bind(id, action) { document.getElementById(id).addEventListener('click', event => { event.preventDefault(); invoke(action); }); }
  const buttons = { 'start-button':'start','demo-button':'demo','resume-button':'resume','retry-button':'retry','pause-home-button':'home','end-home-button':'home','home-mark':'home','take-control-button':'takeControl','sound-button':'toggleSound','quality-button':'toggleQuality','map-button':'toggleMap','map-close':'toggleMap','pause-button':'pause','touch-torch':'toggleTorch','touch-bell':'decoy','touch-kick':'kick' };
  Object.entries(buttons).forEach(([id, action]) => bind(id, action));
  el['language-button'].addEventListener('click', event => { event.preventDefault(); setLanguage(currentLanguage === 'zh' ? 'en' : 'zh'); });
  refreshMapReferences();
  applyLanguage();
  document.querySelectorAll('[data-note]').forEach(button => button.addEventListener('click', () => invoke('note', Number(button.dataset.note))));

  function updateMove() {
    const x = Number(directions.has('right')) - Number(directions.has('left'));
    const z = Number(directions.has('forward')) - Number(directions.has('back'));
    invoke('move', x, z);
  }
  function clearTouch() {
    if (directions.size) { directions.clear(); updateMove(); }
    if (heldInteract) { heldInteract = false; invoke('interact', false); }
    if (heldSprint) { heldSprint = false; invoke('sprint', false); }
    document.querySelectorAll('.touch-controls .held').forEach(button => button.classList.remove('held'));
  }
  document.querySelectorAll('[data-direction]').forEach(button => {
    const direction = button.dataset.direction;
    button.addEventListener('pointerdown', event => {
      if (state.mode !== 'playing' || state.demo) return;
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      directions.add(direction); button.classList.add('held'); updateMove();
    });
    for (const eventName of ['pointerup','pointercancel','lostpointercapture']) button.addEventListener(eventName, () => {
      if (directions.delete(direction)) updateMove();
      button.classList.remove('held');
    });
  });
  el['touch-interact'].addEventListener('pointerdown', event => {
    if (state.mode !== 'playing' || state.demo) return;
    event.preventDefault(); el['touch-interact'].setPointerCapture(event.pointerId);
    heldInteract = true; el['touch-interact'].classList.add('held'); invoke('interact', true);
  });
  for (const eventName of ['pointerup','pointercancel','lostpointercapture']) el['touch-interact'].addEventListener(eventName, () => {
    if (heldInteract) { heldInteract = false; invoke('interact', false); }
    el['touch-interact'].classList.remove('held');
  });
  el['touch-sprint'].addEventListener('pointerdown', event => {
    if (state.mode !== 'playing' || state.demo) return;
    event.preventDefault(); el['touch-sprint'].setPointerCapture(event.pointerId);
    heldSprint = true; el['touch-sprint'].classList.add('held'); invoke('sprint', true);
  });
  for (const eventName of ['pointerup','pointercancel','lostpointercapture']) el['touch-sprint'].addEventListener(eventName, () => {
    if (heldSprint) { heldSprint = false; invoke('sprint', false); }
    el['touch-sprint'].classList.remove('held');
  });
  window.addEventListener('blur', clearTouch);
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearTouch(); });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const panel = state.mapOpen ? el['map-panel'] : state.mode === 'paused' ? el['pause-screen'] : ['won','lost'].includes(state.mode) ? el['end-screen'] : null;
    if (!panel) return;
    const controls = [...panel.querySelectorAll('button:not([disabled]),a[href]')];
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && (!panel.contains(document.activeElement) || document.activeElement === first)) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && (!panel.contains(document.activeElement) || document.activeElement === last)) { event.preventDefault(); first?.focus(); }
  });

  function update(next) {
    const mapChanged=Boolean(state.mapOpen)!==Boolean(next.mapOpen);
    state = next;
    const mode = next.mode || 'title';
    const playing = mode === 'playing';
    const ended = mode === 'won' || mode === 'lost';
    const memories = next.memories || [];
    const count = memories.filter(memory => memory.done).length;
    const focus = playing ? next.focus : null;
    attr(el.ui, 'data-mode', mode);
    el.ui.classList.toggle('demo-running', Boolean(next.demo && playing));
    show(el['title-screen'], mode === 'title');
    show(el.hud, playing);
    show(el.reticle, playing && !next.mapOpen);
    show(el['pause-screen'], mode === 'paused');
    show(el['end-screen'], ended);
    show(el['demo-strip'], playing && Boolean(next.demo));
    show(el['touch-controls'], playing && !next.mapOpen && !next.demo && coarse.matches);
    show(el['map-panel'], playing && Boolean(next.mapOpen));
    show(el['focus-prompt'], Boolean(focus) && !next.mapOpen);
    if(mapChanged){clearTouch();if(next.mapOpen)document.getElementById('map-close').focus({preventScroll:true});else if(playing)el.scene.focus({preventScroll:true});}
    show(el['loading'], mode === 'title' && !next.ready);
    if (el['start-button'].disabled === Boolean(next.ready)) el['start-button'].disabled = !next.ready;
    if (el['demo-button'].disabled === Boolean(next.ready)) el['demo-button'].disabled = !next.ready;

    const copy = COPY[currentLanguage];
    const objective = next.objective === COPY.en.objectiveReturn ? copy.objectiveReturn : next.objective === COPY.en.objectiveFind ? copy.objectiveFind : next.objective || copy.objectiveFind;
    const hint = next.hint === COPY.en.hint ? copy.hint : next.hint || copy.hint;
    text(el.objective, objective);
    text(el.hint, hint);
    const navigation=next.navigation;
    show(el['navigation-label'],playing&&Boolean(navigation?.label));
    if(navigation?.label){const label=translateRuntime(navigation.label,currentLanguage,{type:'navigation'});const units=currentLanguage==='zh'?'单位':'units';text(el['navigation-label'],`${label}${Number.isFinite(navigation.distance)?` · ${Math.round(navigation.distance)} ${units}`:''}`);}
    const track=next.track;
    show(el['track-status'],playing&&Boolean(track?.active));
    el.ui.classList.toggle('track-running',playing&&Boolean(track?.active));
    if(track?.active){
      text(el['track-progress'],`${copy.trackLabel} · ${Math.min(track.total||4,(track.next||0)+1)} / ${track.total||4}`);
      text(el['track-clock'],`${Math.ceil(Math.max(0,track.timeLeft||0))}${copy.seconds}`);
      el['track-status'].classList.toggle('urgent',(track.timeLeft||0)<=8);
    }
    text(el['memory-count'], `${count} / 4`);
    for (const memory of memories) {
      const node = memoryNodes[memory.id];
      if (node) { node.classList.toggle('done', Boolean(memory.done)); const title = MEMORY_COPY[currentLanguage][memory.id] || MEMORY_TITLES[memory.id] || memory.title || memory.id; attr(node, 'aria-label', `${title}: ${memory.done ? copy.memoryRecovered : copy.memoryMissing}`); }
      mapNodes[memory.id]?.classList.toggle('done', Boolean(memory.done));
      mapEntries[memory.id]?.classList.toggle('done', Boolean(memory.done));
    }
    const composure = Math.round(100 - clamp(next.fear, 0, 100));
    const battery = Math.round(clamp(next.battery, 0, 100));
    const health = Math.round(clamp(next.health ?? 100, 0, 100));
    text(el['health-value'], health); width(el['health-fill'], health);
    attr(el['health-fill'].parentElement, 'aria-label', currentLanguage === 'zh' ? `生命值 ${health}%` : `Blood ${health} percent`);
    el.ui.classList.toggle('low-blood', health <= 30 && playing);
    const biteOpacity = (playing ? clamp((next.biteFlash || 0) / .7, 0, 1) : 0).toFixed(2);
    if (el['bite-effect'].style.opacity !== biteOpacity) el['bite-effect'].style.opacity = biteOpacity;
    const chasers = Math.max(0, Number(next.chasers) || 0);
    text(el['chase-label'], chasers ? `${chasers} ${chasers === 1 ? copy.chaseOne : copy.chaseMany}` : copy.chaseNone);
    el['chase-label'].classList.toggle('chasing', chasers > 0);
    const kickCooling = (next.kickCooldown || 0) > 0;
    text(el['kick-label'], kickCooling ? `${copy.kickCooldown} · ${(next.kickCooldown || 0).toFixed(1)}s` : copy.kickReady);
    text(el['touch-kick'], kickCooling ? '…' : currentLanguage === 'zh' ? '踢' : 'Kick');
    attr(el['touch-kick'], 'aria-disabled', kickCooling);
    text(el['composure-value'], composure); width(el['composure-fill'], composure);
    const composureColor = composure < 30 ? 'var(--red)' : 'var(--safe)';
    if (el['composure-fill'].style.background !== composureColor) el['composure-fill'].style.background = composureColor;
    text(el['battery-value'], battery); width(el['battery-fill'], battery);
    text(el['torch-label'], next.torch ? copy.torchOn : copy.torchOff);
    text(el['touch-torch'], next.torch ? copy.lightOn : copy.lightOff);
    attr(el['touch-torch'], 'aria-pressed', Boolean(next.torch));
    el['safety-label'].classList.toggle('safe', Boolean(next.safe));
    text(el['safety-label'].querySelector('b'), next.safe ? copy.safe : copy.safety);
    const noise = clamp(next.noise, 0, 1);
    text(el['noise-label'], noise > .6 ? copy.noiseHigh : noise > .15 ? copy.noiseMid : copy.noiseLow);
    const activeBars = Math.ceil(noise * 5);
    [...el['noise-bars'].children].forEach((bar,index) => bar.classList.toggle('active', index < activeBars));
    el['noise-bars'].classList.toggle('noisy', noise > .6);
    attr(el['noise-bars'], 'aria-label', currentLanguage === 'zh' ? `噪声 ${Math.round(noise * 100)}%` : `Noise ${Math.round(noise * 100)} percent`);
    text(el['bell-label'], next.decoyCooldown > 0 ? `${copy.bellCooldown} ${Math.ceil(next.decoyCooldown)}${copy.seconds}` : copy.bellReady);
    const quality = next.quality === 'Smooth' ? (currentLanguage === 'zh' ? '流畅' : 'Smooth') : next.quality === 'Detail' ? (currentLanguage === 'zh' ? '细节' : 'Detail') : (currentLanguage === 'zh' ? '自动' : 'Auto');
    text(el['quality-label'], quality);
    attr(document.getElementById('quality-button'), 'aria-label', currentLanguage === 'zh' ? `画面：${quality}。点击切换。` : `Rendering: ${quality}. Click to change.`);
    attr(el['sound-button'], 'aria-pressed', Boolean(next.sound));
    attr(el['sound-button'], 'aria-label', next.sound ? copy.soundOn : copy.soundOff);
    attr(el['map-button'], 'aria-expanded', Boolean(next.mapOpen));
    attr(el['map-button'], 'aria-label', next.mapOpen ? copy.mapClose : copy.mapOpen);
    text(el['demo-caption'], translateRuntime(next.caption || copy.demoCaption,currentLanguage));
    const message = playing ? translateRuntime(next.message || '',currentLanguage) : '';
    show(el['event-message'], Boolean(message));
    text(el['event-message'], message);

    if (focus) {
      text(el['focus-title'], translateRuntime(focus.title || copy.focusTitle,currentLanguage,{type:'focusTitle',id:focus.id}));
      text(el['focus-instruction'], translateRuntime(focus.instruction || copy.focusInstruction,currentLanguage,{type:'focusInstruction',id:focus.id}));
      width(el['ritual-progress'], clamp(focus.progress, 0, 1) * 100);
    }
    const residenceFocus = Boolean(focus && /residence|echo|melody|note|chime|music/i.test(`${focus.id || ''} ${focus.title || ''} ${focus.instruction || ''}`));
    const residenceDone = memories.some(memory => memory.id === 'residence' && memory.done);
    // The live demo supplies its own notes; manual keys appear after takeover.
    show(el['note-controls'], playing && residenceFocus && !residenceDone && !next.demo);
    el['note-controls'].querySelectorAll('button').forEach(button => {
      if (button.disabled !== Boolean(next.demo)) button.disabled = Boolean(next.demo);
    });
    if (next.mapOpen && next.player) {
      const p=mapPoint({x:clamp(next.player.x,CAMPUS.bounds.minX,CAMPUS.bounds.maxX),z:clamp(next.player.z,CAMPUS.bounds.minZ,CAMPUS.bounds.maxZ)});
      const angle = -(Number(next.player.yaw) || 0) * 180 / Math.PI;
      attr(el['map-player'], 'transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${angle.toFixed(1)})`);
      show(el['map-ghost'], Boolean(next.ghost?.visible));
      if (next.ghost?.visible) {const ghost=mapPoint(next.ghost);attr(el['map-ghost'], 'cx', ghost.x.toFixed(1));attr(el['map-ghost'], 'cy',ghost.y.toFixed(1));}
      show(el['map-target'],Boolean(navigation?.target));
      if(navigation?.target){const target=mapPoint(navigation.target);attr(el['map-target'],'cx',target.x.toFixed(1));attr(el['map-target'],'cy',target.y.toFixed(1));}
    }
    if (ended) {
      const won = mode === 'won';
      text(el['end-eyebrow'], won ? copy.endEyebrowWin : health <= 0 ? copy.endEyebrowLost : copy.endEyebrowChased);
      text(el['end-title'], won ? copy.endTitleWin : copy.endTitleLost);
      text(el['end-description'], won ? copy.endDescriptionWin : translateRuntime(next.message || '',currentLanguage) || copy.endDescriptionLost);
      text(el['end-memories'], `${count} / 4`);
      text(el['end-time'], clock(next.time));
      setTrailingText(el['retry-button'], won ? copy.retryWin : copy.retryLost);
    }
    if (mode !== lastMode) {
      clearTouch();
      if (mode === 'paused') document.getElementById('resume-button').focus({preventScroll:true});
      if (ended) el['retry-button'].focus({preventScroll:true});
      if (playing) el.scene.focus({preventScroll:true});
      if (mode === 'title' && lastMode !== null && next.ready) el['start-button'].focus({preventScroll:true});
      lastMode = mode;
    }
  }

  function setLoading(label, progress) {
    text(el['loading-label'], translateRuntime(label || COPY.en.loading,currentLanguage));
    width(el['loading-progress'], clamp(progress, 0, 1) * 100);
  }
  return {update,setLoading};
}
