const $=id=>document.getElementById(id);
const KEY='trial4954_cinema_v16';
const scenes=[
['Пролог · 21 октября, 20:50','Подсудимый Дмитрий','Всех чатов, вы у меня не одни( Я негодяй','defendant',0],
['Пролог · 21 октября, 21:21','Судья Агафонов','Разве у нас по договору пользования чатом такое допустимо? Я считаю, что данный прецедент требует проверки!','judge','thoughtful'],
['Пролог · 21 октября, 23:11','Дмитрий Самохин','Закинем в клод на суд. Пусть он решает.','samokhin',1],
['Глава I · Суд идёт','Судья Агафонов','Всем встать! Суд идёт! Дело № 4954/2026 о чатовой неверности принимается к рассмотрению.','judge','angry'],
['Глава I · Суд идёт','Судья Агафонов','Сам факт существования других чатов ещё не является достаточным основанием для обвинительного приговора.','judge','neutral'],
['Глава I · Суд идёт','Натали','Изменяешь нам? Это вообще как понимать?','natali',2],
['Глава I · Суд идёт','Рассказчик','Следствие может вмешаться: каким тоном задать первый вопрос?','narrator',0,[['Строго и официально','Судья Агафонов','Следствие просит объяснить обстоятельства.','judge','angry'],['С лёгкой иронией','Судья Агафонов','Уточним: сколько вкладок Telegram открыто в вашем сердце?','judge','smile']]],
['Глава II · Каджит не крал','Подсудимый Дмитрий','Этот котик не виноват, такова его натура. Каджит не крал, а остальное всё допустимо, только порицаемо.','defendant',4],
['Глава II · Каджит не крал','Судья Агафонов','Суд принимает к сведению: каджит не крал. Но обвинения в хищении сладких рулетов в Вайтране и не предъявлялось!','judge','smile'],
['Глава II · Каджит не крал','Судья Агафонов','Нельзя наказать за нарушение закона, которого не существует. Однако общественное порицание — отдельный вопрос.','judge','thoughtful'],
['Глава III · Свидетель Геннадий','Дмитрий Самохин','Суд вызывает стикер-бота Геннадия. Беспристрастность: условная.','samokhin',3],
['Глава III · Свидетель Геннадий','Геннадий','По моим данным, у подсудимого имеется значок «Почётный участник».','bot',0],
['Глава III · Свидетель Геннадий','Рассказчик','Позже выясняется: история со значком выдумана. Как отреагировать?','narrator',0,[['Потребовать перепроверки','Судья Агафонов','Исключить сведения о значке из материалов дела.','judge','angry'],['Отнестись с иронией','Судья Агафонов','Геннадий, художественный талант не заменяет доказательств.','judge','smile']]],
['Глава III · Свидетель Геннадий','Геннадий','Я просто иногда додумываю детали для драматического эффекта.','bot',0],
['Глава IV · Баронесса','Дмитрий Самохин','Вызвать Баронессу-пулемётчицу!','samokhin',4],
['Глава IV · Баронесса','Баронесса-пулемётчица','Я бы не назвала это изменой. Скорее параллельным альянсом.','baroness',3],
['Глава IV · Баронесса','Баронесса-пулемётчица','Юридически это можно расценить как тайм-менеджмент, а не предательство.','baroness',1],
['Глава V · Передача дела','Дмитрий Самохин','Всё. @it_walker, дальше передаю дело в ваше правление. Мои свидетели закончились.','samokhin',5],
['Глава V · Передача дела','Судья Агафонов','Суд принимает материалы дела. Отныне никакие личные симпатии не могут влиять на правосудие.','judge','neutral'],
['Глава V · Неожиданный свидетель','Волшебный цыплёнок','ВАША ЧЕСТЬ! У МЕНЯ ЕСТЬ СВИДЕТЕЛЬ! И пятьсот зрителей!','chick',0],
['Глава V · Неожиданный свидетель','Судья Агафонов','Количество подписчиков не является доказательством. Но пятьсот зрителей занесите в протокол.','judge','surprised'],
['Глава V · Неожиданный свидетель','Баронесса-пулемётчица','Не беспокойтесь, ваша честь. Сегодня я буду стрелять исключительно фактами.','baroness',4],
['Глава V · Неожиданный свидетель','Судья Агафонов','Такой вид вооружения допускается.','judge','smile'],
['Глава V · Неожиданный свидетель','Баронесса-пулемётчица','Если человек заходит в другую таверну, это ещё не означает, что он предал свою гильдию.','baroness',0],
['Глава VI · Последнее слово','Судья Агафонов','Гражданин Дмитрий! Считаете ли вы чат «Общение» своим главным чатом?','judge','angry'],
['Глава VI · Последнее слово','Подсудимый Дмитрий','Я состою в нескольких чатах. И я не буду отрицать очевидного.','defendant',3],
['Глава VI · Последнее слово','Подсудимый Дмитрий','Но разве каджит, зашедший в таверну выпить эля, предаёт свою гильдию?','defendant',1],
['Глава VI · Последнее слово','Подсудимый Дмитрий','Элитность — в людях. В Баронессе, в волшебном цыплёнке, в Агафонове, который судит поступки, а не существительные.','defendant',5],
['Финал · Решение суда','Рассказчик','Какую формулировку предложить суду? Итог истории от выбора не изменится.','narrator',0,[['Справедливую','Судья Агафонов','Суд благодарит за взвешенное заключение.','judge','neutral'],['Ироничную','Судья Агафонов','Суд благодарит за заключение с элементами каджитского права.','judge','smile']]],
['Финал · Решение суда','Судья Агафонов','Участие в других чатах установлено. Но доказательств нарушения конкретного запрета суду не представлено.','judge','thoughtful'],
['Финал · Решение суда','Судья Агафонов','Подсудимого оправдать по предъявленным обвинениям. Право сообщества на добродушное порицание сохранить.','judge','verdict'],
['Эпилог · За пределами суда','Подсудимый Дмитрий','Вот так мы и приходим к тому, что нейронки отвечают на нейронки, а потом нейронки всё визуализируют…','defendant',4],
['Конец · Дело № 4954','Рассказчик','Судебное заседание окончено. Чат «Общение» продолжает работу. Все персонажи вымышлены ровно настолько, насколько позволяет переписка.','narrator',0]
];
const cast=new Set(['judge','samokhin','defendant','natali','baroness']);
const judgeMoods=new Set(['neutral','thoughtful','smile','angry','surprised','verdict']);
let pos=0,choiceDone={},typing=false,interval=null,shown='',history=[],audio=null,muted=true,chapter='';
try{const state=JSON.parse(localStorage.getItem(KEY)||'{}');pos=Math.max(0,Math.min(scenes.length-1,state.pos||0));choiceDone=state.choices||{}}catch{}
function persist(){localStorage.setItem(KEY,JSON.stringify({pos,choices:choiceDone}))}
function chime(f=400,d=.07){if(muted)return;try{audio=audio||new (window.AudioContext||window.webkitAudioContext)();const o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.035,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+d);o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+d)}catch{}}
function portrait(s){const box=$('character');box.replaceChildren();const key=s[3],m=s[4];if(cast.has(key)){const im=document.createElement('img');im.className='linear-face';im.alt=s[1];const suffix=key==='judge'?(judgeMoods.has(m)?m:'neutral'):(Number.isInteger(m)?m:0);im.src=`assets/${key}_${suffix}.webp`;im.onerror=()=>{im.onerror=null;im.src=`assets/${key}_hero.webp`};box.append(im)}else{box.textContent=key==='bot'?'🤖':key==='chick'?'🐥':'📜'}}
function finishTyping(){if(!typing)return false;clearInterval(interval);typing=false;$('dialog').textContent=shown;return true}
function typeText(t){clearInterval(interval);shown=t;typing=true;const el=$('dialog');el.textContent='';let i=0;interval=setInterval(()=>{i=Math.min(t.length,i+2);el.textContent=t.slice(0,i);if(i>=t.length){clearInterval(interval);typing=false}},19)}
function splash(title){const el=$('chapterSplash');$('splashTitle').textContent=title;el.hidden=false;el.classList.remove('cinema-chapter');void el.offsetWidth;el.classList.add('cinema-chapter');setTimeout(()=>el.hidden=true,1050)}
function show(){const s=scenes[pos];$('act').textContent=s[0];$('speaker').textContent=s[1];portrait(s);typeText(s[2]);$('options').replaceChildren();const choices=s[5];if(choices&&!choiceDone[pos]){for(let i=0;i<choices.length;i++){const b=document.createElement('button');b.textContent=choices[i][0];b.onclick=()=>{choiceDone[pos]=i;persist();show();chime(570)};$('options').append(b)}}else if(choices){const picked=choices[choiceDone[pos]];const b=document.createElement('div');b.className='reaction';b.textContent=`↳ ${picked[1]}: ${picked[2]}`;$('options').append(b)}$('next').hidden=!!choices&&!Object.hasOwn(choiceDone,pos);$('next').textContent=pos===scenes.length-1?'↻ С начала':'Далее →';$('reputation').textContent=`${pos+1} / ${scenes.length}`;persist();if(s[0]!==chapter){chapter=s[0];if(pos>0)splash(chapter)}if(pos===30){$('scene').classList.add('finale');setTimeout(()=>$('scene').classList.remove('finale'),1200)}}
function advance(){if(finishTyping())return;if($('next').hidden)return;if(pos===scenes.length-1){pos=0;choiceDone={};history=[];chapter=''}else{history.push([scenes[pos][1],scenes[pos][2]]);pos++}chime(440);show()}
$('next').onclick=advance;
$('scene').addEventListener('click',e=>{if(e.target.closest('button')||e.target.closest('#options'))return;advance()});
$('start').onclick=()=>{pos=0;choiceDone={};history=[];chapter='';$('menu').hidden=true;show()};
$('continue').onclick=()=>{$('menu').hidden=true;show()};
$('continue').hidden=!localStorage.getItem(KEY);
$('restart').onclick=()=>{if(confirm('Начать историю заново?')){pos=0;choiceDone={};history=[];chapter='';show()}};
$('home').onclick=()=>{$('menu').hidden=false;$('continue').hidden=false};
$('sound').onclick=()=>{muted=!muted;$('sound').textContent=muted?'🔇':'🔊';$('menuSound').textContent=muted?'🔇 Звук выключен':'🔊 Звук включён';chime(660)};
$('menuSound').onclick=()=>$('sound').click();
$('history').onclick=()=>{finishTyping();$('historyList').replaceChildren();const records=[...history,[scenes[pos][1],scenes[pos][2]]];for(const [who,line] of records){const p=document.createElement('p');const strong=document.createElement('strong');strong.textContent=who+': ';p.append(strong,document.createTextNode(line));$('historyList').append(p)}$('historyModal').hidden=false};
$('historyClose').onclick=()=>$('historyModal').hidden=true;
for(const id of ['statsButton','evidence','object','press','present'])$(id).hidden=true;
for(const id of ['status','crossTools','podium','mood'])$(id).hidden=true;
window.addEventListener('keydown',e=>{if(!$('menu').hidden||!$('historyModal').hidden)return;if(e.key==='Enter'||e.key===' '||e.key==='ArrowRight'){e.preventDefault();advance()}});
show();
