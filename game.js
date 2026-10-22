const $=id=>document.getElementById(id);
const KEY='trial4954_simple_v18';
const scenes=[
['Пролог · 21 октября, 20:49','Анатолий','Ему хватает этого чата','narrator',0],
['Пролог · 21 октября, 20:50','Подсудимый Дмитрий','Всех чатов, вы у меня не одни (Я негодяй)','defendant',0],
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
let pos=0,choices={},reaction=false,muted=true,audio;
try{const s=JSON.parse(localStorage.getItem(KEY)||'{}');pos=Math.max(0,Math.min(scenes.length-1,s.pos||0));choices=s.choices||{};reaction=!!s.reaction}catch{}
function save(){localStorage.setItem(KEY,JSON.stringify({pos,choices,reaction}))}
function chime(){if(muted)return;try{audio??=new (window.AudioContext||window.webkitAudioContext)();const o=audio.createOscillator(),g=audio.createGain();o.frequency.value=440;o.type='sine';g.gain.setValueAtTime(.02,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.09);o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+.09)}catch{}}
const assetMap={judge:{neutral:'judge_neutral.webp',thoughtful:'judge_thinking.webp',smile:'judge_smile.webp',angry:'judge_angry.webp',surprised:'judge_surprised.webp',verdict:'judge_verdict.webp'}};
function picture(s){
 const box=$('character');box.replaceChildren();const key=s[3],m=s[4];
 if(!cast.has(key)){
   const symbol=document.createElement('span');symbol.className='scene-symbol';symbol.textContent=key==='bot'?'🤖':key==='chick'?'🐥':'💬';box.append(symbol);return;
 }
 const img=document.createElement('img');img.alt=`Иллюстрация: ${s[1]}`;
 // Large portraits are preferred over tiny thumbnails, which looked blurry on iPhone.
 // Judge has dedicated expression files; other cast use the full-resolution hero crop.
 const file=key==='judge'?(assetMap.judge[m]||assetMap.judge.neutral):`${key}_hero.webp`;
 img.src=`assets/${file}`;
 img.onerror=()=>{img.onerror=null;img.src=`assets/${key}.webp`};
 box.append(img);
}
function show(){const s=scenes[pos],picked=choices[pos],option=s[5];$('act').textContent=s[0];$('options').replaceChildren();if(option&&picked!==undefined&&reaction){const r=option[picked];$('speaker').textContent=r[1];$('dialog').textContent=r[2];picture([s[0],r[1],r[2],r[3],r[4]]);$('next').hidden=false}else{$('speaker').textContent=s[1];$('dialog').textContent=s[2];picture(s);if(option&&picked===undefined){option.forEach((o,i)=>{const b=document.createElement('button');b.textContent=o[0];b.onclick=()=>{choices[pos]=i;reaction=true;save();show();chime()};$('options').append(b)});$('next').hidden=true}else{$('next').hidden=false}}$('next').textContent=pos===scenes.length-1?'↻ Смотреть сначала':'Далее →';$('progress').textContent=`Сцена ${pos+1} из ${scenes.length}`;save()}
function advance(){if($('next').hidden)return;if(reaction){reaction=false}else if(pos===scenes.length-1){pos=0;choices={}}else{pos++}chime();show()}
$('next').onclick=advance;
$('start').onclick=()=>{pos=0;choices={};reaction=false;$('menu').hidden=true;show()};
$('continue').onclick=()=>{$('menu').hidden=true;show()};
$('continue').hidden=!localStorage.getItem(KEY);
$('home').onclick=()=>{$('menu').hidden=false;$('continue').hidden=false};
$('sound').onclick=()=>{muted=!muted;$('sound').textContent=muted?'🔇':'🔊';chime()};
window.addEventListener('keydown',e=>{if(!$('menu').hidden)return;if(e.key==='Enter'||e.key==='ArrowRight'){e.preventDefault();advance()}});
show();
