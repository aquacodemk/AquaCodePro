
import { ExerciseCategory, PlanDay } from './types';

export const APP_VERSION = '5.0.0';

export const EXERCISE_CATALOG: ExerciseCategory[] = [
  {
    title: '1.1. „Жабица" (Eggbeater) - Водени',
    items: [
      { 
        id: 'egg_static_basic', 
        name: 'Статична „жабица" (Основна)', 
        instruction: 'Седнете во вода, грбот исправен. Колената широки, нозете прават наизменични кружни движења навнатре.', 
        goal: 'Основа за стабилност', 
        icon: '🔄', 
        category: 'water',
        tips: 'Замислете дека седите на столче. Грбот мора да биде целосно вертикален. Колената треба да бидат пошироки од рамената. Движењето на потколениците е кружно, не "шутирачко".',
        mistakes: 'Наведнување напред со градите. Спојување на колената. Користење на граден стил (жабји) наместо наизменично кружење.'
      },
      { 
        id: 'egg_hands_out', 
        name: 'Раце на рамења/надвор', 
        instruction: 'Подигнете ги лактите над површината на водата. Држете ги дланките отворени и мирни.', 
        goal: 'Подготовка', 
        icon: '🙌', 
        category: 'water',
        tips: 'Лактите и дланките не смеат да ја допираат водата. Одржувајте ја висината исклучиво со работа на нозете. Дишете рамномерно.',
        mistakes: 'Потонување на лактите во вода за помош. Грчење на рамената кон ушите.'
      },
      { 
        id: 'egg_hands_up', 
        name: 'Раце над глава', 
        instruction: 'Целосно испружете ги рацете вертикално нагоре. Покажете ги пазувите.', 
        goal: 'Блок', 
        icon: '🙆‍♂️', 
        category: 'water',
        tips: 'Рацете треба да бидат целосно испружени, бицепсот до ушите. Прстите раширени. Погледот е напред, не горе.',
        mistakes: 'Свиткување на лактите. Потонување на главата под вода. Наведнување наназад.'
      },
      { 
        id: 'egg_resist_partner', 
        name: '„Жабица" со отпор (Партнер)', 
        instruction: 'Партнерот ве притиска на рамената надолу. Вие мора да ја одржувате висината.', 
        goal: 'Сила под оптоварување', 
        icon: '🤼', 
        category: 'water',
        tips: 'Зголемете ја фреквенцијата на работа со нозете кога чувствувате притисок. Грбот останува прав.',
        mistakes: 'Задржување на здивот. Прекинување на работата со нозе кога притисокот е силен.'
      },
      { id: 'egg_resist_medball', name: 'Медицинска топка над глава', instruction: 'Држете топка (2-5кг) со две раце над глава додека правите жабица.', goal: 'Сила на јадро', icon: '🏐', category: 'water', tips: 'Топката мора да биде сува (над вода).', mistakes: 'Спуштање на топката на глава.' },
      { id: 'egg_dynamic_move', name: 'Движење само со нозе', instruction: 'Движете се напред, назад и странично користејќи само нозе. Рацете се мирни.', goal: 'Прецизно позиционирање', icon: '↔️', category: 'water', tips: 'Навалете го торзото малку во насоката на движење.', mistakes: 'Користење на раце за помош при движење.' },
      { id: 'egg_spider', name: '„Пајак" (Spiders)', instruction: 'Експлозивни движења: 2 замавнувања напред, 2 назад, 2 лево, 2 десно.', goal: 'Агилност', icon: '🕷️', category: 'water', tips: 'Промените на насока мора да бидат остри.', mistakes: 'Премногу големи движења кои ве вадат од баланс.' },
      { id: 'egg_360', name: 'Свртување 360', instruction: 'Ротирајте се околу својата оска во место, користејќи само нозе и колкови.', goal: 'Ориентација', icon: '💫', category: 'water' },
      { id: 'egg_weight_belt', name: 'Жабица со појас (тег)', instruction: 'Континуирана работа 30-60сек носејќи појас со тегови.', goal: 'Специфична издржливост', icon: '⚖️', category: 'water' },
      { id: 'egg_jug', name: 'Цедење на балон', instruction: 'Наполнете балон со вода, кренете го над глава наопаку и држете додека не истече.', goal: 'Интензитет', icon: '🚰', category: 'water' },
      { id: 'egg_one_leg', name: 'Жабица со една нога', instruction: 'Правете жабица со една нога додека другата е испружена напред.', goal: 'Баланс', icon: '🦵', category: 'water' },
      { id: 'egg_high_knees', name: 'Жабица со високи колена', instruction: 'Подигнување на колената до гради додека правите жабица.', goal: 'Флексибилност', icon: '🦵', category: 'water' },
      { id: 'egg_sculling', name: 'Жабица со скалинг (Sculling)', instruction: 'Одржување рамнотежа со лесни движења на дланките (осмици) додека нозете работат.', goal: 'Фина моторика', icon: '🖐️', category: 'water' },
      { id: 'egg_horizontal', name: 'Хоризонтална жабица на грб', instruction: 'Лежење на грб, нозете работат жабица за движење наназад.', goal: 'Одбранбено позиционирање', icon: '🦦', category: 'water' },
      { id: 'egg_tempo', name: 'Жабица со промена на ритам', instruction: '10 секунди бавно, 10 секунди максимално брзо.', goal: 'Кондиција', icon: '⏱️', category: 'water' },
      { id: 'egg_arms_cross', name: 'Жабица со вкрстени раце', instruction: 'Дланките на спротивните рамења, лактите над вода.', goal: 'Држење на тело', icon: '🙅', category: 'water' },
      { id: 'egg_chair', name: 'Столче (Chair)', instruction: 'Држење пластично столче или голем предмет над глава.', goal: 'Сила', icon: '🪑', category: 'water' }
    ]
  },
  {
    title: '1.2. Експлозивност во Вода - Водени',
    items: [
      { id: 'jump_max', name: 'Максимален скок (Boost)', instruction: 'Еден силен граден удар со нозе + силна жабица. Обидете се да го извадите струкот од вода.', goal: 'Висина за шут/блок', icon: '🚀', category: 'water', tips: 'Тајмингот помеѓу ударот со нозе и повлекувањето со слободната рака е клучен.', mistakes: 'Скокање наназад наместо вертикално нагоре.' },
      { id: 'jump_repetitive', name: 'Повторувачки скокови (Pop-ups)', instruction: 'Серија од 10-15 брзи скокови без пауза. Рацете целосно над вода при секој скок.', goal: 'Анаеробна издржливост', icon: '🐇', category: 'water' },
      { id: 'jump_block', name: 'Скок за Блок', instruction: 'Скокнете и испружете една рака дијагонално (кон замислена топка).', goal: 'Блокирање', icon: '✋', category: 'water' },
      { id: 'jump_rotation', name: 'Скок со Ротација', instruction: 'Скокнете и завртете го торзото на страна (како за шут).', goal: 'Механика на шут', icon: '🌪️', category: 'water' },
      { id: 'start_dead', name: 'Мртов Старт', instruction: 'Од вертикална положба во место, експлодирајте во хоризонтален спринт.', goal: 'Прв чекор', icon: '🏁', category: 'water' },
      { id: 'start_turn', name: 'Старт од лежење', instruction: 'Лежете на грб/стомак. На сигнал, свртете се и спринтајте.', goal: 'Транзиција', icon: '🔄', category: 'water' },
      { id: 'stop_go', name: 'Транзиција (Stop-and-Go)', instruction: 'Спринт -> Нагло запирање вертикално -> Нов спринт.', goal: 'Промена на посед', icon: '🚦', category: 'water' },
      { id: 'jump_jacks', name: 'Водни Џампинг Џекс', instruction: 'Силно излегување од вода со градите, плеснете со рацете над глава.', goal: 'Експлозивна моќ', icon: '👏', category: 'water' },
      { id: 'jump_reaction', name: 'Реактивни скокови', instruction: 'Партнер ви дава сигнал и вие скокајте што повисоко.', goal: 'Брзина на реакција', icon: '⚡', category: 'water' },
      { id: 'jump_sequence', name: 'Секвенца од скокови', instruction: '3 ниски скокови + 1 максимален скок. Повторете 5 пати.', goal: 'Издржливост', icon: '🔄', category: 'water' },
      { id: 'jump_double_block', name: 'Двоен блок скок', instruction: 'Експлозивен скок со двете раце високо кренати и споени.', goal: 'Одбрана', icon: '🙌', category: 'water' },
      { id: 'jump_wall_push', name: 'Одбивање од ѕид (Wall Push)', instruction: 'Држење за раб, потопување и силно одбивање наназад во позиција.', goal: 'Старт', icon: '🧱', category: 'water' },
      { id: 'jump_180', name: 'Скок со 180° вртење', instruction: 'Скокнете високо и завртете се за 180 степени додека сте во воздух.', goal: 'Агилност', icon: '🔄', category: 'water' },
      { id: 'jump_triple', name: 'Троен скок', instruction: 'Три максимални скока еден по друг со минимална пауза.', goal: 'Моќ', icon: '3️⃣', category: 'water' }
    ]
  },
  {
    title: '1.3. Специфично Пливање - Водени',
    items: [
      { id: 'swim_sprint', name: 'Спринт (Head-up)', instruction: 'Кратки, брзи завеслаи со глава над вода. Погледот е напред.', goal: 'Преглед на игра', icon: '🏊‍♂️', category: 'water' },
      { id: 'swim_endurance', name: 'Издржливост (Head-up)', instruction: 'Пливање со глава горе на подолги дистанци со умерено темпо.', goal: 'Аеробна база', icon: '⏱️', category: 'water' },
      { id: 'swim_dribble', name: 'Пливање со топка (Dribbling)', instruction: 'Топката се води меѓу рацете во бранот што го прави главата. Не ја допирајте често.', goal: 'Контрола на топка', icon: '🏐', category: 'water' },
      { id: 'swim_defense', name: 'Одбранбено пливање', instruction: 'Пливање на грб со глава крената, гледајќи кон напаѓачот.', goal: 'Следење на противник', icon: '🛡️', category: 'water' },
      { id: 'swim_bungee', name: 'Пливање со ластик', instruction: 'Врзани со ластик за работ на базенот, пливате во место против отпорот.', goal: 'Сила на завеслај', icon: '🔗', category: 'water' },
      { id: 'swim_change_dir', name: 'Пливање со промена на насока', instruction: 'На секои 5-7 завеслаи, нагло сменете насока.', goal: 'Агилност', icon: '🔄', category: 'water' },
      { id: 'swim_underwater', name: 'Подводно пливање', instruction: 'Пливање под вода 10-15 метри по скок.', goal: 'Изненадување', icon: '🌊', category: 'water' },
      { id: 'swim_catchup', name: 'Catch-up пливање', instruction: 'Едната рака чека другата да заврши со завеслајот пред да започне.', goal: 'Техника', icon: '⏱️', category: 'water' },
      { id: 'swim_over_hips', name: 'Преку колкови (Over-hips)', instruction: 'Пливање на нозе, со висока ротација на колковите и менување правец.', goal: 'Мобилност', icon: '🕺', category: 'water' },
      { id: 'swim_trudgen', name: 'Глисирање (Trudgen)', instruction: 'Еден силен завеслај проследен со силен ножен удар (ножички) и лизгање.', goal: 'Агресивен старт', icon: '🚤', category: 'water' },
      { id: 'swim_tarzan', name: 'Тарзан пливање', instruction: 'Пливање краул со целосно исправено торзо над вода (до гради).', goal: 'Сила на нозе', icon: '🦍', category: 'water' },
      { id: 'swim_slalom', name: 'Слалом со топка', instruction: 'Водење топка помеѓу замислени пречки (или соиграчи).', goal: 'Контрола', icon: '🏁', category: 'water' },
      { id: 'swim_back_head', name: 'Грбно со глава горе', instruction: 'Пливање грбно но главата е фиксно над вода за да се гледа топката.', goal: 'Преглед', icon: '👀', category: 'water' },
      { id: 'swim_spider_lat', name: 'Страничен Пајак', instruction: 'Движење странично со телото рамно на вода, користејќи раце како весла.', goal: 'Позиционирање', icon: '🦀', category: 'water' }
    ]
  },
  {
    title: '1.4. Ракување со Топка и Шут - Водени',
    items: [
      { id: 'pass_static', name: 'Статично додавање', instruction: 'Во парови. Лактот високо, користете го зглобот на шаката за прецизност.', goal: 'Техника', icon: '🤝', category: 'water' },
      { id: 'pass_dynamic', name: 'Динамично додавање', instruction: 'Додавање додека пливате кон голот или странично.', goal: 'Ситуација на игра', icon: '🏃‍♂️', category: 'water' },
      { id: 'pass_dry', name: '„Суви" додавања', instruction: 'Топката не смее да ја допре водата. Брза размена.', goal: 'Контрола', icon: '🌵', category: 'water' },
      { id: 'pass_wet', name: '„Мокри" додавања', instruction: 'Додавање на вода пред играчот (во простор).', goal: 'За центар/влез', icon: '💦', category: 'water' },
      { id: 'shot_eggbeater', name: 'Шут од „жабица"', instruction: 'Силно подигање со нозе, ротација на тело, исфрлање.', goal: 'Периметарски шут', icon: '🎯', category: 'water' },
      { id: 'shot_fake', name: 'Лажирање (Fakes)', instruction: 'Замавнете како за шут, но запрете. Држете се високо со нозете.', goal: 'Измама', icon: '🎭', category: 'water' },
      { id: 'ball_pickup', name: 'Подигање (Pick-ups)', instruction: 'Фаќање на топка од вода одоздола (под топка) или одозгора (стисок).', goal: 'Брзина', icon: '✋', category: 'water' },
      { id: 'wet_shot_pass', name: 'Шут „од прва" (Мокар)', instruction: 'Шут веднаш штом топката ја допре водата или раката (без задршка).', goal: 'Изненадување', icon: '🌊', category: 'water' },
      { id: 'shot_power', name: 'Шут за моќ', instruction: 'Фокусирајте се на максимална сила наместо прецизност.', goal: 'Моќ', icon: '💥', category: 'water' },
      { id: 'shot_accuracy', name: 'Шут за прецизност', instruction: 'Напаѓајте ги специфични точки на голот.', goal: 'Прецизност', icon: '🎯', category: 'water' },
      { id: 'backhand_shot', name: 'Шут со задна страна', instruction: 'Шут со задната страна на раката.', goal: 'Тесни агли', icon: '🔄', category: 'water' },
      { id: 'shot_lob_tech', name: 'Технички Лоб', instruction: 'Висок лак на топката, користејќи само зглоб, без голема сила.', goal: 'Прецизност', icon: '🌈', category: 'water' },
      { id: 'shot_skip', name: 'Жабица-шут (Skip shot)', instruction: 'Шут каде топката отскокнува од водата пред голот.', goal: 'Изненадување', icon: '🐸', category: 'water' },
      { id: 'pass_push', name: 'Туркање (Push Pass)', instruction: 'Брз пас од рамо без замавнување, само со екстензија на лактот.', goal: 'Брзина', icon: '⏩', category: 'water' },
      { id: 'ball_transfer', name: 'Префрлање (Transfer)', instruction: 'Брзо префрлање на топката од лева во десна рака над глава.', goal: 'Контрола', icon: '👐', category: 'water' },
      { id: 'shot_wrist', name: 'Шут од зглоб', instruction: 'Без замавнување на раката, само со силен потег на шаката.', goal: 'Изненадување', icon: '👋', category: 'water' }
    ]
  },
  {
    title: '1.5. Напредна Техника и Финти - Водени',
    items: [
      { id: 'tech_heli', name: 'Хеликоптер (Helicopter)', instruction: 'Пливање преку топка, фаќање со нозе и вртење 360 степени.', goal: 'Изнудување фаул', icon: '🚁', category: 'water', tips: 'Морате брзо да ги повлечете нозете под себе за да ја заштитите топката.', mistakes: 'Премногу бавно вртење.' },
      { id: 'tech_popcorn', name: 'Пуканки (Tipping)', instruction: 'Брзо префрлање на топката од една во друга рака над глава со врвовите на прстите.', goal: 'Контрола', icon: '🍿', category: 'water', tips: 'Лактите високо, само зглобовите работат.' },
      { id: 'tech_v_cut', name: 'V-Cut Ослободување', instruction: 'Пливање кон бекот, нагло запирање и пливање дијагонално нанадвор.', goal: 'Примање топка', icon: '✌️', category: 'water' },
      { id: 'tech_ball_under', name: 'Криење топка (Ball Under)', instruction: 'Брзо потопување на топката под вода за да се избегне кражба (внимавајте на судијата).', goal: 'Заштита', icon: '🤿', category: 'water' },
      { id: 'tech_pump_fake', name: 'Двојна пумпа', instruction: 'Две брзи лажирања по ред, па шут под рацете на голманот.', goal: 'Реализација', icon: '⏬', category: 'water' },
      { id: 'tech_turn_spin', name: 'Ролинг околу играч', instruction: 'Користење на раката на противникот како оска за вртење.', goal: 'Предност', icon: '🌪️', category: 'water' }
    ]
  },
  {
    title: '1.6. Контрола и Дишење (Вода)',
    items: [
      { id: 'breath_underwater', name: 'Пливање под вода (25м)', instruction: 'Пливање една должина под вода без земање воздух (или со малку).', goal: 'Капацитет на бели дробови', icon: '🤿', category: 'water', tips: 'Опуштете се, паниката троши кислород.' },
      { id: 'breath_hypoxic', name: 'Хипоксично пливање', instruction: 'Пливање краул со дишење на 5, 7 или 9 завеслаи.', goal: 'Толеранција на CO2', icon: '😤', category: 'water' },
      { id: 'control_buoy', name: 'Пливање со бова (Pull-buoy)', instruction: 'Бова помеѓу нозе, пливање само со раце.', goal: 'Изолација на раце', icon: '💪', category: 'water' },
      { id: 'control_fists', name: 'Пливање со тупаници', instruction: 'Пливање краул со стиснати тупаници за да се почувствува отпорот со подлактицата.', goal: 'Осет за вода', icon: '👊', category: 'water' },
      { id: 'control_vertical_kick', name: 'Вертикални нозе со раце надвор', instruction: 'Вертикална положба, нозе краул/делфин, рацете целосно суви.', goal: 'Интензивна издржливост', icon: '🎢', category: 'water' },
      { id: 'breath_static', name: 'Статична апнеа', instruction: 'Нуркање во место и држење здив (само со надзор!).', goal: 'Ментална контрола', icon: '🧘', category: 'water' }
    ]
  },
  {
    title: '2.1. Долен Дел (Теретана) - Суви',
    items: [
      { id: 'gym_squat_back', name: 'Заден Чучњев', instruction: 'Шипка на трапез, стапала малку пошироко од колкови. Спуштете се длабоко.', goal: 'Максимална сила', icon: '🦵', category: 'dry' },
      { id: 'gym_squat_front', name: 'Преден Чучњев', instruction: 'Шипка на предно рамо. Торзото мора да биде многу исправено.', goal: 'Сила на јадро', icon: '🏋️', category: 'dry' },
      { id: 'gym_deadlift', name: 'Мртво Дигање', instruction: 'Подигање товар од под со исправен грб, користејќи колкови.', goal: 'Заден синџир', icon: '🏗️', category: 'dry' },
      { id: 'gym_bulgarian', name: 'Бугарски Чучњев', instruction: 'Една нога на клупа назад, со другата правите чучњев.', goal: 'Унилатерална сила', icon: '🦄', category: 'dry' },
      { id: 'gym_lunge_lat', name: 'Страничен Исчекор', instruction: 'Исчекор на страна, задникот оди назад.', goal: 'Препони', icon: '↔️', category: 'dry' },
      { id: 'gym_hip_thrust', name: 'Hip Thrusts', instruction: 'Грб на клупа, тег на колкови, подигање на колковите нагоре.', goal: 'Глутеус', icon: '🍑', category: 'dry' },
      { id: 'gym_step_ups', name: 'Степ-апс', instruction: 'Чекор нагоре на клупа со тежење.', goal: 'Функционалност', icon: '⬆️', category: 'dry' },
      { id: 'gym_calf_raises', name: 'Подигање на глуждови', instruction: 'Подигање на прсти со тежење.', goal: 'Глуждови', icon: '👣', category: 'dry' },
      { id: 'gym_goblet', name: 'Goblet Чучњев', instruction: 'Чучњев држејќи тег/кетлбел пред гради.', goal: 'Мобилност/Јадро', icon: '🍷', category: 'dry' },
      { id: 'gym_nordic', name: 'Нордиско виткање (Nordic Curl)', instruction: 'Клекнати, спуштање на торзото напред додека партнерот ги држи глуждовите.', goal: 'Задна ложа', icon: '🦵', category: 'dry' },
      { id: 'gym_kb_swing', name: 'Kettlebell Swing', instruction: 'Експлозивно нишање на тег со колковите (не со рацете).', goal: 'Експлозивност колкови', icon: '🔔', category: 'dry' },
      { id: 'gym_box_squat', name: 'Box Squat', instruction: 'Чучњев до седење на кутија, па експлозивно станување.', goal: 'Експлозивен старт', icon: '📦', category: 'dry' }
    ]
  },
  {
    title: '2.2. Плиометрија (Експлозивност) - Суви',
    items: [
      { id: 'plyo_box', name: 'Скокови на Кутија', instruction: 'Скок од место на кутија. Доскокнете меко.', goal: 'Трансфер на сила', icon: '📦', category: 'dry' },
      { id: 'plyo_broad', name: 'Скок во Далечина', instruction: 'Скок напред што подалеку. Користете замав со раце.', goal: 'Хоризонтален старт', icon: '🦘', category: 'dry' },
      { id: 'plyo_med_chest', name: 'Фрлање мед. топка (Гради)', instruction: 'Туркање топка од гради кон ѕид (како пас).', goal: 'Експлозивност раце', icon: '💣', category: 'dry' },
      { id: 'plyo_med_overhead', name: 'Фрлање мед. топка (Над глава)', instruction: 'Фрлање топка во под или ѕид (како аут во фудбал).', goal: 'Сила на јадро', icon: '🏐', category: 'dry' },
      { id: 'plyo_clean', name: 'Power Clean (Надфрлање)', instruction: 'Експлозивно повлекување на тег од под до гради.', goal: 'Координација', icon: '🏋️‍♀️', category: 'dry' },
      { id: 'plyo_depth_jump', name: 'Скок од длабочина', instruction: 'Скок од кутија и веднаш скок нагоре.', goal: 'Реактивна сила', icon: '🔄', category: 'dry' },
      { id: 'plyo_lateral_bound', name: 'Странични скокови', instruction: 'Скок од страна на страна со максимална далечина.', goal: 'Странична експлозивност', icon: '↔️', category: 'dry' },
      { id: 'plyo_single_box', name: 'Скок на кутија (Една нога)', instruction: 'Експлозивен скок и доскок на една нога.', goal: 'Баланс', icon: '🦩', category: 'dry' },
      { id: 'plyo_burpee', name: 'Бурпи (Burpees)', instruction: 'Склек, скок напред, скок во вис.', goal: 'Кондиција', icon: '🔥', category: 'dry' },
      { id: 'plyo_jump_squat', name: 'Скок Чучњев', instruction: 'Континуирани скокови од чучњев позиција.', goal: 'Издржливост на скок', icon: '🐇', category: 'dry' }
    ]
  },
  {
    title: '2.3. Горен Дел - Влечење - Суви',
    items: [
      { id: 'pull_pullups', name: 'Згибови (Pull-ups)', instruction: 'Влечење на вратило додека брадата не помине шипка.', goal: 'Ширина на грб', icon: '🦍', category: 'dry' },
      { id: 'pull_lat_down', name: 'Lat Pulldowns', instruction: 'Влечење сајла кон гради.', goal: 'Сила на завеслај', icon: '⏬', category: 'dry' },
      { id: 'pull_rows_bb', name: 'Веслање со шипка', instruction: 'Наведнете се напред (грб прав) и влечете ја шипката кон стомак.', goal: 'Дебелина на грб', icon: '🚣', category: 'dry' },
      { id: 'pull_rows_db', name: 'Веслање со тег (1 рака)', instruction: 'Една рака и колено на клупа, влечете тег со другата.', goal: 'Унилатералност', icon: '🛶', category: 'dry' },
      { id: 'pull_face_pulls', name: 'Face Pulls', instruction: 'Влечење сајла кон лицето со надворешна ротација.', goal: 'Здравје на рамената', icon: '😎', category: 'dry' },
      { id: 'pull_renegade_rows', name: 'Renegade Rows', instruction: 'Во позиција на склек, влечете тег со една рака.', goal: 'Јадро & Грб', icon: '💪', category: 'dry' },
      { id: 'pull_chinup', name: 'Chin-ups (Дланки навнатре)', instruction: 'Згибови со дланките свртени кон вас.', goal: 'Бицепс и Грб', icon: '🦾', category: 'dry' },
      { id: 'pull_inverted', name: 'Inverted Row', instruction: 'Висење под шипка и влечење на градите кон неа.', goal: 'Хоризонтално влечење', icon: '🪜', category: 'dry' }
    ]
  },
  {
    title: '2.4. Горен Дел - Туркање - Суви',
    items: [
      { id: 'push_ohp', name: 'Потисок над глава (OHP)', instruction: 'Туркање шипка/тегови од рамења до испружени раце над глава.', goal: 'Стабилност на рамења', icon: '🏋️‍♂️', category: 'dry' },
      { id: 'push_bench', name: 'Бенч Прес', instruction: 'Туркање тег од гради лежејќи.', goal: 'Сила за дуел', icon: '💪', category: 'dry' },
      { id: 'push_pushups', name: 'Склекови', instruction: 'Класични склекови.', goal: 'Општа сила', icon: '🤸', category: 'dry' },
      { id: 'push_dips', name: 'Пропаѓања (Dips)', instruction: 'Спуштање и подигање на разбој.', goal: 'Трицепс', icon: '⏬', category: 'dry' },
      { id: 'push_landmine', name: 'Landmine Потисок', instruction: 'Туркање на шипка вкотвена во едниот крај, дијагонално нагоре.', goal: 'Агол на шут', icon: '🚀', category: 'dry' },
      { id: 'push_plate_press', name: 'Потисок со плоча', instruction: 'Туркање тег плоча од гради нагоре.', goal: 'Контрола', icon: '⏫', category: 'dry' },
      { id: 'push_incline', name: 'Кос Бенч Прес', instruction: 'Туркање тег на коса клупа (30-45 степени).', goal: 'Горни гради', icon: '📐', category: 'dry' },
      { id: 'push_spiderman', name: 'Спајдермен Склекови', instruction: 'Склек со носење на коленото кон лактот.', goal: 'Јадро и Гради', icon: '🕷️', category: 'dry' }
    ]
  },
  {
    title: '2.5. Јадро (Ротација и Стабилност) - Суви',
    items: [
      { id: 'core_med_rot', name: 'Ротационо фрлање (Мед. топка)', instruction: 'Застанете странично до ѕид, фрлете ја топката со ротација на торзото.', goal: 'Ротациона сила', icon: '🌪️', category: 'dry' },
      { id: 'core_woodchop', name: '„Сечење дрва" (Woodchops)', instruction: 'Повлекување сајла дијагонално од горе надолу (или обратно).', goal: 'Контрола на торзо', icon: '🪓', category: 'dry' },
      { id: 'core_russian', name: 'Руски свртувања', instruction: 'Седење на под, нозе во воздух, вртење лево-десно со тег.', goal: 'Коси стомачни', icon: '🇷🇺', category: 'dry' },
      { id: 'core_pallof', name: 'Палоф Прес (Pallof)', instruction: 'Држете затегнат ластик пред гради и не дозволувајте да ве сврти.', goal: 'Анти-ротација', icon: '🧱', category: 'dry' },
      { id: 'core_deadbug', name: 'Мртва бубачка', instruction: 'Лежејќи на грб, спуштајте спротивна рака и нога без да го одлепите грбот.', goal: 'Координација', icon: '🐞', category: 'dry' },
      { id: 'core_hollow_hold', name: 'Hollow Hold', instruction: 'Лежејќи на грб, кренете ги рацете и нозете од подот.', goal: 'Јакнење на јадро', icon: '🛌', category: 'dry' },
      { id: 'core_plank_shoulder_tap', name: 'Планк со допирање', instruction: 'Во планк, допрете го десното рамо со левата рака и обратно.', goal: 'Динамичка стабилност', icon: '✋', category: 'dry' },
      { id: 'core_turkish', name: 'Турско станување (Turkish Get-up)', instruction: 'Станување од лежечка позиција држејќи тег испружен над глава цело време.', goal: 'Комплетна стабилност', icon: '👳', category: 'dry' },
      { id: 'core_superman', name: 'Супермен', instruction: 'Лежејќи на стомак, кренете ги рацете и нозете истовремено.', goal: 'Долен грб', icon: '🦸', category: 'dry' },
      { id: 'core_ab_wheel', name: 'Тркало (Ab Wheel)', instruction: 'Тркалање напред со затегнат стомак.', goal: 'Екстремна сила', icon: '🛞', category: 'dry' }
    ]
  },
  {
    title: '2.6. Превенција и Мобилност - Суви',
    items: [
      { id: 'prev_ext_rot', name: 'Надворешна ротација', instruction: 'Со ластик, лактот залепен до тело, подлактицата ротира нанадвор.', goal: 'Превенција рамо', icon: '🔄', category: 'dry' },
      { id: 'prev_facepull', name: 'Face Pulls', instruction: 'Влечење сајла кон лицето, лактите високо и назад.', goal: 'Задно рамо', icon: '😎', category: 'dry' },
      { id: 'prev_frog', name: '„Жаба" истегнување', instruction: 'На колена, раширете ги колената максимално.', goal: 'Мобилност колкови', icon: '🐸', category: 'dry' },
      { id: 'prev_thoracic', name: 'Торакални ротации', instruction: 'На четири нозе, ротирајте ја едната рака кон таванот.', goal: 'Мобилност грб', icon: '🧘', category: 'dry' },
      { id: 'prev_slideboard', name: 'Лизгачки исчекори', instruction: 'Лизгање на страна со една нога (Slideboard или чорапи на паркет).', goal: 'Препони', icon: '⛸️', category: 'dry' },
      { id: 'prev_band_pullaparts', name: 'Band Pull-Aparts', instruction: 'Истегнете лента пред вас и повлечете ја настрана.', goal: 'Здравје на рамо', icon: '🔀', category: 'dry' },
      { id: 'prev_bear_crawl', name: 'Мечка лазење', instruction: 'Лазење на четири нозе, колената не го допираат подот.', goal: 'Стабилност на рамо', icon: '🐻', category: 'dry' }
    ]
  },
  {
    title: '2.7. TRX и Функционалност - Суви',
    items: [
      { id: 'trx_row', name: 'TRX Веслање', instruction: 'Држејќи се за каишите, навалете се наназад и влечете ги градите кон рачките.', goal: 'Грб', icon: '🎗️', category: 'dry' },
      { id: 'trx_y_fly', name: 'TRX Y-Fly', instruction: 'Од стоечка позиција, ширете ги рацете во форма на Y.', goal: 'Здравје на рамо', icon: '🦅', category: 'dry' },
      { id: 'trx_atomic', name: 'TRX Atomic Pushup', instruction: 'Нозете во каишите, направете склек па повлечете ги колената кон гради.', goal: 'Цело тело', icon: '⚛️', category: 'dry' },
      { id: 'trx_pistol', name: 'TRX Пиштол Чучњев', instruction: 'Чучњев на една нога со помош на каишите за баланс.', goal: 'Нозе и баланс', icon: '🔫', category: 'dry' },
      { id: 'trx_pike', name: 'TRX Pike', instruction: 'Во планк (нозе во каиши), подигнете го задникот високо во воздух.', goal: 'Јадро', icon: '⛰️', category: 'dry' }
    ]
  },
  {
    title: '2.8. Кардио и Кондиција - Суви',
    items: [
        { id: 'cardio_rowing', name: 'Ергометар (Веслање)', instruction: '500м спринтови или 2000м темпо. Користете нозе за иницијација.', goal: 'Цело тело', icon: '🚣', category: 'dry' },
        { id: 'cardio_rope', name: 'Скокање јаже (Double Unders)', instruction: 'Двојни прескоци или брзи единечни.', goal: 'Брзи стапала', icon: '➰', category: 'dry' },
        { id: 'cardio_burpee_box', name: 'Бурпи + Скок на кутија', instruction: 'Бурпи проследено веднаш со скок на кутија.', goal: 'Експлозивен капацитет', icon: '📦', category: 'dry' },
        { id: 'cardio_assault', name: 'Assault Bike', instruction: 'Максимален напор за кратки интервали (пр. 10с спринт, 20с одмор).', goal: 'Анаеробен праг', icon: '🚲', category: 'dry' },
        { id: 'cardio_stairs', name: 'Трчање по скали', instruction: 'Спринт нагоре по скали, одење надолу.', goal: 'Сила на нозе', icon: '🪜', category: 'dry' }
    ]
  },
  {
    title: '3.1. Голман (The Wall) - Специјални',
    items: [
      { id: 'gk_corners', name: 'Скокови во Агли', instruction: 'Од средина на гол, пливајте/скокајте да ја допрете горната точка на стативата.', goal: 'Покривање гол', icon: '🥅', category: 'special' },
      { id: 'gk_lunge', name: 'Странични Исчекори (Lunges)', instruction: 'Експлозивно странично движење со испружени раце над вода.', goal: 'Ниски топки', icon: '🦀', category: 'special' },
      { id: 'gk_heavy_hands', name: 'Тешки Раце (Топка/Тегови)', instruction: 'Одржување позиција со раце над глава држејќи тегови или полн балон.', goal: 'Издржливост', icon: '🏋️‍♂️', category: 'special' },
      { id: 'gk_reflex_short', name: 'Рефлекс на кратко', instruction: 'Партнер шутира од 2-3м, голманот реагира инстинктивно.', goal: 'Реакција', icon: '⚡', category: 'special' },
      { id: 'gk_lob_defense', name: 'Одбрана од Лоб', instruction: 'Брзо пливање наназад и вертикален скок со една рака.', goal: 'Спасување', icon: '🤚', category: 'special' },
      { id: 'gk_5m_slide', name: 'Лизгање на 5м', instruction: 'Следење на топката по имагинарна линија на 5 метри (полукруг).', goal: 'Позиционирање', icon: '📏', category: 'special' },
      { id: 'gk_lunge_high', name: 'Исчекор во висок агол', instruction: 'Експлозивен скок дијагонално нагоре од вода.', goal: 'Високи агли', icon: '↗️', category: 'special' },
      { id: 'gk_shuffle', name: 'Брзо странично пливање', instruction: 'Кратки, брзи движења лево-десно без потонување.', goal: 'Микро-корекција', icon: '↔️', category: 'special' },
      { id: 'gk_reaction_drill', name: 'Вежба за реакција', instruction: 'Голманот со грб кон шутерот, се врти на сигнал.', goal: 'Време на реакција', icon: '🔄', category: 'special' },
      { id: 'gk_wipers', name: 'Брисачи (Wipers)', instruction: 'Држејќи се за статива/раб, ротација на нозете лево-десно на површина.', goal: 'Јадро', icon: '🧹', category: 'special' },
      { id: 'gk_cross_cage', name: 'Спринт Статива-Статива', instruction: 'Спринт од една до друга статива без допирање на дното.', goal: 'Покривање', icon: '🥅', category: 'special' },
      { id: 'gk_double_jump', name: 'Двоен скок', instruction: 'Скок во еден агол, веднаш скок во другиот.', goal: 'Втор обид', icon: '🐇', category: 'special' }
    ]
  },
  {
    title: '3.2. Центар (The Tank) - Специјални',
    items: [
      { id: 'cf_hold_pos', name: 'Заградување Позиција', instruction: 'Широк став на нозе, грб завртен кон гол, една рака го држи бекот подалеку.', goal: 'Простор за прием', icon: '🗿', category: 'special' },
      { id: 'cf_screw', name: 'Шрауба (Screw Shot)', instruction: 'Фаќање топка и ротација наназад за шут без гледање.', goal: 'Реализација со грб', icon: '🔩', category: 'special' },
      { id: 'cf_sweep', name: 'Швеѓанка (Sweep Shot)', instruction: 'Страничен шут со испружена рака (како кука).', goal: 'Шут околу блок', icon: '🧹', category: 'special' },
      { id: 'cf_leg_wrestle', name: 'Борење со нозе', instruction: 'Буткање на назад користејќи само нозе (без раце).', goal: 'Позиција без фаул', icon: '🤼', category: 'special' },
      { id: 'cf_turn_finish', name: 'Свртување и Завршница', instruction: 'Експлозивно вртење околу бекот ("ролање") и шут.', goal: 'Пенал/Гол', icon: '🔄', category: 'special' },
      { id: 'cf_medley_hold', name: 'Издржливост под притисок', instruction: 'Партнерот ве дави/притиска 30 сек, вие држите позиција.', goal: 'Смиреност', icon: '🛡️', category: 'special' },
      { id: 'cf_seal_out', name: 'Seal Out', instruction: 'Држење на бекот зад вас со целото тело.', goal: 'Простор за пас', icon: '🔒', category: 'special' },
      { id: 'cf_underwater_turn', name: 'Свртување под вода', instruction: 'Потопување под бекот и излегување на другата страна.', goal: 'Позиционирање', icon: '🤿', category: 'special' },
      { id: 'cf_front_turn', name: 'Предно вртење', instruction: 'Вртење лице в лице со бекот за да се изнуди исклучување.', goal: 'Исклучување', icon: '🎭', category: 'special' }
    ]
  },
  {
    title: '3.3. Крило/Надворешен (Speed & Skill) - Специјални',
    items: [
      { id: 'wing_drive', name: 'Влез (Drive) на 2м', instruction: 'Спринт од периметар кон гол, нагло запирање, скок.', goal: 'Предност', icon: '🏎️', category: 'special' },
      { id: 'wing_cross_pass', name: 'Шут од префрлање (Cross)', instruction: 'Примање дијагонален пас и шут без спуштање на топка.', goal: 'Изместена одбрана', icon: '🔁', category: 'special' },
      { id: 'wing_lob', name: 'Прецизен Лоб', instruction: 'Нежен, технички удар со висок лак.', goal: 'Измама', icon: '🌈', category: 'special' },
      { id: 'wing_counter', name: 'Контра 1 на 0', instruction: 'Спринт со топка, пливање до 2-3м и реализација.', goal: 'Сигурен гол', icon: '⚡', category: 'special' },
      { id: 'wing_dry_rec', name: 'Примање „Сува" топка', instruction: 'Скок високо од вода за да се фати лош/висок пас.', goal: 'Посед', icon: '🤲', category: 'special' },
      { id: 'wing_rb', name: 'Rear Back (RB) потег', instruction: 'Лажен влез, нагло пливање наназад за да се прими топка.', goal: 'Ослободување', icon: '🔙', category: 'special' },
      { id: 'wing_crossover', name: 'Вкрстен Влез', instruction: 'Пливање со префрлање на нозете преку противникот.', goal: 'Блокирање пат', icon: '🥨', category: 'special' },
      { id: 'wing_quick_release', name: 'Брзо пуштање', instruction: 'Примање и шут во едно движење.', goal: 'Изненадување', icon: '🎯', category: 'special' },
      { id: 'wing_dead_angle', name: 'Шут од мртов агол', instruction: 'Реализација од позиција 1 или 5, блиску до гол линија.', goal: 'Прецизност', icon: '📐', category: 'special' },
      { id: 'wing_screen', name: 'Поставување Блок', instruction: 'Пливање пред соиграч за да му го блокирате чуварот.', goal: 'Тимска игра', icon: '🧱', category: 'special' },
      { id: 'wing_pop', name: 'Излегување (Pop)', instruction: 'Брзо пливање нанадвор од 2м за да се прими топка.', goal: 'Креирање агол', icon: '📤', category: 'special' }
    ]
  },
  {
    title: '3.4. Бек/Одбрана (The Guard) - Специјални',
    items: [
      { id: 'guard_press_legs', name: 'Прес со нозе (Pressing)', instruction: 'Високи колкови, притисок врз центарот со гради.', goal: 'Туркање', icon: '🦵', category: 'special' },
      { id: 'guard_donut', name: 'Блок „Крофна" (Donut)', instruction: 'Кружно движење со една рака пред лицето на напаѓачот.', goal: 'Блокирање видик', icon: '🍩', category: 'special' },
      { id: 'guard_foul_drop', name: 'Фаул и Повлекување', instruction: 'Направете фаул на периметар, па веднаш спринт назад пред гол.', goal: 'Спречување влез', icon: '📉', category: 'special' },
      { id: 'guard_shot_block', name: 'Блок со исчекор', instruction: 'Следење на раката на шутерот и скок во тој правец.', goal: 'Блокирање шут', icon: '✋', category: 'special' },
      { id: 'guard_front', name: 'Предна Маркација', instruction: 'Пливање околу центарот за да застанете ПРЕД него.', goal: 'Пресекување пас', icon: '🚧', category: 'special' },
      { id: 'guard_wrestle_shoot', name: 'Борење па Шут', instruction: '10 сек силно борење со партнер, потоа спринт во напад.', goal: 'Транзиција', icon: '🤼‍♂️', category: 'special' },
      { id: 'guard_interception', name: 'Вежба за пресретнување', instruction: 'Пливање за пресретнување на пас.', goal: 'Антиципација', icon: '🎯', category: 'special' },
      { id: 'guard_lane_block', name: 'Блокирање линија на пас', instruction: 'Поставување рака/тело помеѓу додавачот и центарот.', goal: 'Пресекување', icon: '🛑', category: 'special' },
      { id: 'guard_hand_check', name: 'Проверка со рака', instruction: 'Константен лесен допир на противникот за да се знае каде е.', goal: 'Контрола', icon: '👋', category: 'special' }
    ]
  },
  {
    title: '4.1. Комбинирани Вежби - Специјални',
    items: [
      { id: 'combo_swim_shoot', name: 'Пливање + Шут', instruction: 'Спринт 15м и веднаш шут кон гол.', goal: 'Транзиција пливање-шут', icon: '🏊‍♂️🎯', category: 'special' },
      { id: 'combo_pass_shoot', name: 'Пас + Шут', instruction: 'Примање пас и веднаш шут.', goal: 'Брзина на реализација', icon: '🤝🎯', category: 'special' },
      { id: 'combo_eggbeater_shoot', name: 'Жабица + Шут', instruction: 'Интензивна жабица 30 сек и веднаш шут.', goal: 'Шут под замор', icon: '🔄🎯', category: 'special' },
      { id: 'combo_defense_offense', name: 'Одбрана + Напад', instruction: 'Одбранбено пливање 10м и веднаш спринт во напад.', goal: 'Брза транзиција', icon: '🛡️⚡', category: 'special' }
    ]
  },
  {
    title: '4.2. Тимски Вежби - Специјални',
    items: [
      { id: 'team_counter_attack', name: 'Контра Напад', instruction: 'Целосен тимски контра напад од одбрана.', goal: 'Координација', icon: '🔄⚡', category: 'special' },
      { id: 'team_6v5', name: '6 на 5 Ситуација', instruction: 'Вежба со еден играч повеќе во напад.', goal: 'Бројчена предност', icon: '6️⃣🆚5️⃣', category: 'special' },
      { id: 'team_passing_rotation', name: 'Ротирање на додавања', instruction: 'Тимска ротирачка вежба на додавања.', goal: 'Тимска хемија', icon: '🔄🤝', category: 'special' },
      { id: 'team_defensive_slides', name: 'Одбранбени лизгања', instruction: 'Координирано странично движење во одбрана.', goal: 'Тимска одбрана', icon: '🛡️↔️', category: 'special' }
    ]
  },
  {
    title: '4.3. Играч Повеќе/Помалку (Man Up/Down) - Специјални',
    items: [
      { id: 'manup_42', name: '4-2 Ротација', instruction: 'Крилата влегуваат на 2м, надворешните ротираат топка.', goal: 'Создавање простор', icon: '🔄', category: 'special' },
      { id: 'manup_33', name: '3-3 Напад', instruction: 'Класичен распоред, тројца на 2м, тројца надвор.', goal: 'Ширина', icon: '📐', category: 'special' },
      { id: 'manup_post', name: 'Игра на статива (Post)', instruction: 'Играчот на статива излегува наназад да прими топка.', goal: 'Асистенција', icon: '🥅', category: 'special' },
      { id: 'mandown_m', name: 'М-Зона', instruction: 'Одбраната се повлекува во форма на буквата М за да ги покрие стативите.', goal: 'Блокирање агли', icon: 'Ⓜ️', category: 'special' },
      { id: 'mandown_press', name: 'Прес на топка', instruction: 'Агресивен напад на играчот со топка додека другите се повлечени.', goal: 'Крадење време', icon: '⏱️', category: 'special' }
    ]
  },
  {
    title: '5.1. Ментална Подготовка - Психологија',
    items: [
      { id: 'mental_vis_shot', name: 'Визуелизација на Шут', instruction: 'Затворете очи и детално замислете го совршениот шут (движење, звук, чувство).', goal: 'Неврална патека', icon: '🧠', category: 'special' },
      { id: 'mental_box_breath', name: 'Дишење во кутија (Box Breathing)', instruction: '4с вдишување, 4с држење, 4с издишување, 4с држење. За смирување пред натпревар.', goal: 'Контрола на стрес', icon: '🌬️', category: 'special' },
      { id: 'mental_reset', name: 'Фокус Ресет (Клучен збор)', instruction: 'Изберете збор (пр. "Следно") кој ќе го кажете по грешка за да се вратите во сегашноста.', goal: 'Брзо опоравување', icon: '🔄', category: 'special' },
      { id: 'mental_body_scan', name: 'Скенирање на тело', instruction: 'Прогресивна релаксација на мускулите од пети до глава пред спиење.', goal: 'Рекуперација', icon: '🛌', category: 'special' }
    ]
  },
  {
    title: '5.2. Видео Анализа & Теорија',
    items: [
      { id: 'video_self', name: 'Анализа на свој натпревар', instruction: 'Гледајте снимка од вашиот натпревар. Запишете 3 добри работи и 3 грешки.', goal: 'Само-корекција', icon: '📹', category: 'special' },
      { id: 'video_pro', name: 'Гледање ЛШ Натпревар', instruction: 'Гледајте натпревар од Лига Шампиони. Фокусирајте се само на играчот од вашата позиција.', goal: 'Учење од најдобрите', icon: '📺', category: 'special' },
      { id: 'video_gk_analysis', name: 'Анализа на Голман', instruction: 'Следете го движењето на голманот додека топката се движи по периметар.', goal: 'Читање на одбрана', icon: '🥅', category: 'special' }
    ]
  },
  {
    title: '6.1. Исхрана за Ватерполисти',
    items: [
      { id: 'nutri_hydration', name: 'Хидрација', instruction: 'Пијте 500мл вода 2 часа пред тренинг. Изотоник за време на тренинг подолг од 1 час.', goal: 'Енергија', icon: '💧', category: 'special' },
      { id: 'nutri_pre_game', name: 'Оброк пред натпревар', instruction: 'Јадете 3-4 часа пред натпревар. Сложени јаглехидрати (ориз, паста) + умерен протеин (пилешко). Без маснотии.', goal: 'Гориво', icon: '🍝', category: 'special' },
      { id: 'nutri_snack', name: 'Ужина пред старт (1ч)', instruction: 'Банана, енергетски бар или тост со мед 1 час пред влегување во вода.', goal: 'Брза енергија', icon: '🍌', category: 'special' },
      { id: 'nutri_recovery', name: 'Рекуперација (по тренинг)', instruction: 'Протеин + брзи шеќери (чоколадно млеко или шејк) во рок од 30 мин по излегување од вода.', goal: 'Обнова на мускули', icon: '🥛', category: 'special' }
    ]
  },
  {
    title: '7.1. Рехабилитација и Истегнување - Суви',
    items: [
      { id: 'rehab_band_ext', name: 'Ластик - Надворешна Ротација', instruction: 'Лактот залепен за тело, влечење ластик нанадвор.', goal: 'Здравје на рамо', icon: '🎗️', category: 'dry' },
      { id: 'rehab_band_int', name: 'Ластик - Внатрешна Ротација', instruction: 'Лактот залепен за тело, влечење ластик навнатре.', goal: 'Здравје на рамо', icon: '💪', category: 'dry' },
      { id: 'rehab_scapula', name: 'Скапуларна Ретракција', instruction: 'Свиткување на плешките наназад без кревање на рамената.', goal: 'Стабилност', icon: '🦋', category: 'dry' },
      { id: 'rehab_hip', name: 'Истегнување на флексори', instruction: 'Исчекор напред, задната нога на под, туркање колкови напред.', goal: 'Мобилност', icon: '🦵', category: 'dry' },
      { id: 'rehab_foam', name: 'Фоам Ролер - Грб', instruction: 'Масирање на горниот дел од грбот со ролер.', goal: 'Опуштање', icon: '🛌', category: 'dry' }
    ]
  }
];

// WEEK 1: ADAPTATION (Moderate Intensity)
const WEEK_1: Record<string, PlanDay> = {
  'ПОНЕДЕЛНИК': { 
    title: 'Теретана: Адаптација', type: 'dry', goal: 'Основа за сила', 
    items: [
      { name: 'Заден Чучњев', detail: '4 серии x 12 (65% 1RM)', timeMinutes: 15 },
      { name: 'Бенч Прес', detail: '4 серии x 12 (60% 1RM)', timeMinutes: 15 },
      { name: 'Романиско мртво дигање', detail: '3 серии x 10', timeMinutes: 15 },
      { name: 'Планк со тежина', detail: '5 серии x 1 мин', timeMinutes: 15 }
    ]
  },
  'ВТОРНИК': { 
    title: 'Базен: Издржливост 1', type: 'water', goal: 'Аеробна база', 
    items: [
      { name: 'Краул Head-up', detail: '8 x 100м (константно)', timeMinutes: 20 },
      { name: 'Жабица статична', detail: 'Раце на рамења', timeMinutes: 20 },
      { name: 'Спринт старт', detail: '10 x 15м со топка', timeMinutes: 20 }
    ]
  },
  'СРЕДА': { 
    title: 'Теретана: Горно Тело', type: 'dry', goal: 'Моќ на завеслај', 
    items: [
      { name: 'Згибови (Pull-ups)', detail: '4 серии до отказ', timeMinutes: 15 },
      { name: 'Military Press', detail: '4 серии x 10 (60% 1RM)', timeMinutes: 15 },
      { name: 'Face Pulls', detail: '4 серии x 15', timeMinutes: 15 },
      { name: 'Triceps Dips', detail: '3 серии x 12', timeMinutes: 15 }
    ]
  },
  'ЧЕТВРТОК': { 
    title: 'Базен: Техника', type: 'water', goal: 'Контрола на топка', 
    items: [
      { name: 'Пливање со топка', detail: '10 x 50м (дриблинг)', timeMinutes: 25 },
      { name: 'Шут од место', detail: '4 серии x 20 шута', timeMinutes: 20 },
      { name: 'Вертикален скок', detail: '15 x максимална висина', timeMinutes: 15 }
    ]
  },
  'ПЕТОК': { 
    title: 'Теретана: Експлозивен Старт', type: 'dry', goal: 'Плиометрија', 
    items: [
      { name: 'Box Jumps', detail: '5 серии x 6 скока', timeMinutes: 15 },
      { name: 'Med-Ball Slams', detail: '5 серии x 10 повторувања', timeMinutes: 15 },
      { name: 'Искок со тегови', detail: '4 серии x 10', timeMinutes: 15 },
      { name: 'Бурпи со експлозија', detail: '4 серии x 12', timeMinutes: 15 }
    ]
  },
  'САБОТА': { 
    title: 'Базен: Спецификација', type: 'water', goal: 'Позиционирање', 
    items: [
      { name: 'Жабица со тула', detail: '6 x 2 мин (3кг)', timeMinutes: 20 },
      { name: 'Брза транзиција', detail: 'Пливање на грб/гради 1000м', timeMinutes: 25 },
      { name: 'Пенали', detail: 'Вежбање прецизност', timeMinutes: 15 }
    ]
  },
  'НЕДЕЛА': { title: 'Одмор', type: 'rest', goal: 'Регенерација', items: [] }
};

// WEEK 2: STRENGTH (High Load)
const WEEK_2: Record<string, PlanDay> = {
  'ПОНЕДЕЛНИК': { 
    title: 'Теретана: Максимална Сила', type: 'dry', goal: 'Потисок на нозе', 
    items: [
      { name: 'Тежок Чучњев', detail: '5 серии x 5 (85% 1RM)', timeMinutes: 20 },
      { name: 'Мртво дигање', detail: '3 серии x 5 (80% 1RM)', timeMinutes: 15 },
      { name: 'Leg Press', detail: '4 серии x 8 (75% 1RM)', timeMinutes: 15 },
      { name: 'Core Stability', detail: 'Планк со 20кг плоча', timeMinutes: 10 }
    ]
  },
  'ВТОРНИК': { 
    title: 'Базен: Интервали', type: 'water', goal: 'Брзинска издржливост', 
    items: [
      { name: 'Спринт блокови', detail: '20 x 25м (одм. 20сек)', timeMinutes: 25 },
      { name: 'Жабица со отпор', detail: 'Држење партнер 5 мин', timeMinutes: 15 },
      { name: 'Контра-напад вежба', detail: 'Пливање 15м + Шут', timeMinutes: 20 }
    ]
  },
  'СРЕДА': { 
    title: 'Теретана: Сила на Раменици', type: 'dry', goal: 'Стабилност во дуел', 
    items: [
      { name: 'Heavy Bench Press', detail: '5 серии x 5 (80% 1RM)', timeMinutes: 20 },
      { name: 'Згибови со тежина', detail: '4 серии x 6 (+10кг)', timeMinutes: 15 },
      { name: 'Lat Pulldown', detail: '4 серии x 8 (75% 1RM)', timeMinutes: 15 },
      { name: 'Рамена ротација', detail: 'Вежби со гума', timeMinutes: 10 }
    ]
  },
  'ЧЕТВРТОК': { 
    title: 'Базен: Специјални вежби', type: 'water', goal: 'Моќ на центар', 
    items: [
      { name: 'Seal Out вежба', detail: 'Држење позиција 40 сек', timeMinutes: 20 },
      { name: 'Вртење (360)', detail: 'Експлозивна ротација со топка', timeMinutes: 20 },
      { name: 'Head-up пливање', detail: '400м со силни нозе', timeMinutes: 20 }
    ]
  },
  'ПЕТОК': { 
    title: 'Теретана: Full Body Power', type: 'dry', goal: 'Експлозивна сила', 
    items: [
      { name: 'Power Clean', detail: '5 серии x 3 (70% 1RM)', timeMinutes: 20 },
      { name: 'Push Press', detail: '4 серии x 6 (75% 1RM)', timeMinutes: 15 },
      { name: 'Box Squat', detail: '4 серии x 6 (експлозивно)', timeMinutes: 15 },
      { name: 'Russian Twist', detail: '3 серии x 20 (тешка топка)', timeMinutes: 10 }
    ]
  },
  'САБОТА': { 
    title: 'Базен: Интензивна игра', type: 'water', goal: 'Симулација на меч', 
    items: [
      { name: 'Игра 3 на 3', detail: 'Висок интензитет на 5м', timeMinutes: 30 },
      { name: 'Брзо враќање во одбрана', detail: 'Спринт на грб 10 пати', timeMinutes: 15 },
      { name: 'Индивидуална техника', detail: 'Вежби по избор', timeMinutes: 15 }
    ]
  },
  'НЕДЕЛА': { title: 'Одмор', type: 'rest', goal: 'Регенерација', items: [] }
};

// WEEK 3: EXPLOSIVENESS (Max Speed)
const WEEK_3: Record<string, PlanDay> = {
  'ПОНЕДЕЛНИК': { 
    title: 'Теретана: Брзинска Сила', type: 'dry', goal: 'Брзина на движење', 
    items: [
      { name: 'Jump Squats', detail: '6 серии x 4 (30% 1RM)', timeMinutes: 15 },
      { name: 'Explosive Bench', detail: '6 серии x 3 (40% 1RM)', timeMinutes: 15 },
      { name: 'Clapping Pushups', detail: '5 серии до отказ', timeMinutes: 15 },
      { name: 'Sprint Starts (Gym)', detail: 'Кратки потисоци', timeMinutes: 15 }
    ]
  },
  'ВТОРНИК': { 
    title: 'Базен: Максимална Брзина', type: 'water', goal: 'Експлозивен старт', 
    items: [
      { name: 'Спринт 15м', detail: '15 старта со топка', timeMinutes: 20 },
      { name: 'Вертикален скок (Макс)', detail: '20 скока од вода', timeMinutes: 20 },
      { name: 'Брзи раце', detail: 'Вежба за голмани/бекови', timeMinutes: 20 }
    ]
  },
  'СРЕДА': { 
    title: 'Теретана: Плиометрија 2', type: 'dry', goal: 'Еластична моќ', 
    items: [
      { name: 'Depth Jumps', detail: '5 серии x 5 скока', timeMinutes: 15 },
      { name: 'Med-Ball Wall Toss', detail: '5 серии x 12 (странично)', timeMinutes: 15 },
      { name: 'Single Leg Hops', detail: '4 серии x 10', timeMinutes: 15 },
      { name: 'Battle Ropes', detail: '6 серии x 30 сек', timeMinutes: 15 }
    ]
  },
  'ЧЕТВРТОК': { 
    title: 'Базен: Брз Шут', type: 'water', goal: 'Реакција', 
    items: [
      { name: 'Лажирање + Шут', detail: 'Брзо менување агли', timeMinutes: 25 },
      { name: 'Пресинг пливање', detail: '10 x 20м под притисок', timeMinutes: 20 },
      { name: 'Агилност со топка', detail: 'Пајак вежба 10 мин', timeMinutes: 15 }
    ]
  },
  'ПЕТОК': { 
    title: 'Теретана: Хибридна Моќ', type: 'dry', goal: 'Целосна агилност', 
    items: [
      { name: 'Kettlebell Swings', detail: '5 серии x 15 (тешки)', timeMinutes: 15 },
      { name: 'Snatch (DB)', detail: '4 серии x 6 по рака', timeMinutes: 15 },
      { name: 'Explosive Rows', detail: '4 серии x 8', timeMinutes: 15 },
      { name: 'V-Ups (Core)', detail: '4 серии x 20', timeMinutes: 15 }
    ]
  },
  'САБОТА': { 
    title: 'Базен: Натпреварувачки фокус', type: 'water', goal: 'Тактичка брзина', 
    items: [
      { name: 'Спринт 50м', detail: '6 пати на 1:30 мин', timeMinutes: 20 },
      { name: 'Игра 6 на 5', detail: 'Специјални ситуации', timeMinutes: 25 },
      { name: 'Слободни фрлања', detail: 'Прецизност под замор', timeMinutes: 15 }
    ]
  },
  'НЕДЕЛА': { title: 'Одмор', type: 'rest', goal: 'Регенерација', items: [] }
};

// WEEK 4: DELOAD & TECHNIQUE
const WEEK_4: Record<string, PlanDay> = {
  'ПОНЕДЕЛНИК': { 
    title: 'Теретана: Мобилност', type: 'dry', goal: 'Свежина на мускули', 
    items: [
      { name: 'Goblet Squat (Light)', detail: '3 серии x 15', timeMinutes: 20 },
      { name: 'Face Pulls', detail: '3 серии x 20', timeMinutes: 20 },
      { name: 'Истегнување (Цело тело)', detail: 'Контролирани движења', timeMinutes: 20 }
    ]
  },
  'ВТОРНИК': { 
    title: 'Базен: Техничка финост', type: 'water', goal: 'Прецизност на пас', 
    items: [
      { name: 'Пас во движење', detail: '20 мин постојана размена', timeMinutes: 20 },
      { name: 'Лесно пливање', detail: '400м краул опуштено', timeMinutes: 20 },
      { name: 'Тарзан пливање', detail: 'Фокус на лакти', timeMinutes: 20 }
    ]
  },
  'СРЕДА': { 
    title: 'Теретана: Лесен Тонус', type: 'dry', goal: 'Одржување форма', 
    items: [
      { name: 'Бенч (40% 1RM)', detail: '3 серии x 10', timeMinutes: 20 },
      { name: 'Згибови (Помош)', detail: '3 серии x 8', timeMinutes: 20 },
      { name: 'Core Stability', detail: 'Планк и твист', timeMinutes: 20 }
    ]
  },
  'ЧЕТВРТОК': { 
    title: 'Базен: Тактика на меч', type: 'water', goal: 'Визуелизација', 
    items: [
      { name: 'Поставување во напад', detail: 'Вежбање на ротација', timeMinutes: 25 },
      { name: 'Одбрана М-зона', detail: 'Покривање агли', timeMinutes: 20 },
      { name: 'Пенали', detail: 'Психолошка подготовка', timeMinutes: 15 }
    ]
  },
  'ПЕТОК': { 
    title: 'Теретана: Активација', type: 'dry', goal: 'Брзи нервни импулси', 
    items: [
      { name: 'Спринт скокови', detail: '10 пати кратка активација', timeMinutes: 20 },
      { name: 'Лесни ротации', detail: 'Заштита на рамо', timeMinutes: 20 },
      { name: 'Истегнување со гуми', detail: 'Мобилност на колк', timeMinutes: 20 }
    ]
  },
  'САБОТА': { 
    title: 'Базен: Финален тест', type: 'water', goal: 'Свежина и самодоверба', 
    items: [
      { name: 'Краул спринт 10м', detail: '5 пати максимално', timeMinutes: 15 },
      { name: 'Шут техника', detail: '15 мин лесен шут', timeMinutes: 25 },
      { name: 'Жабица контрола', detail: 'Лесни движења', timeMinutes: 20 }
    ]
  },
  'НЕДЕЛА': { title: 'Одмор', type: 'rest', goal: 'Регенерација', items: [] }
};

export const WEEKLY_PLAN_DATA: Record<string, PlanDay> = WEEK_1;

export const MONTHLY_PLAN_DATA = [
  { week: 1, phase: 'АДАПТАЦИЈА', goal: 'Градење основа за сила и адаптација на зглобовите на товарот.', intensity: 'Среден (60-70%)', focus: ['Форма', 'Техника'], schedule: WEEK_1 },
  { week: 2, phase: 'МАКСИМАЛНА СИЛА', goal: 'Зголемување на мускулна моќ преку тешки тежини и низок број повторувања.', intensity: 'Висок (80-90%)', focus: ['Тежина', 'Потисок'], schedule: WEEK_2 },
  { week: 3, phase: 'ЕКСПЛОЗИВНОСТ', goal: 'Претворање на силата во брзина. Фокус на плиометрија и брзи нервни импулси.', intensity: 'Максимален (100%)', focus: ['Брзина', 'Скок'], schedule: WEEK_3 },
  { week: 4, phase: 'ТЕХНИКА И ДЕЛОАД', goal: 'Намалување на волуменот за опоравување и изострување на специфичните ватерполо движења.', intensity: 'Низок (40-50%)', focus: ['Свежина', 'Прецизност'], schedule: WEEK_4 }
];
