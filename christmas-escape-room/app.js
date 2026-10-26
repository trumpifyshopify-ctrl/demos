/* THE CLOCKWORK TOY WORKSHOP — edit this one CONFIG, then use ?selftest=1.
   All puzzle facts, answers, story, timings, palette, interface copy and credits
   live here. Printables and solvers read these same facts. No network is used.
   Seed identifies a fixed, reproducible edition; it never randomises answers.
   When changing a puzzle, change its facts as well as its answer and hints. */
const CONFIG = {
 version:1, seed:'BRINDLEFERN-2412', title:'The Clockwork Toy Workshop',
 subtitle:'Seven lost gears. One wonderful Christmas Eve.', village:'Brindlefern',
 palette:{pine:'#123b32',berry:'#8e263d',gold:'#eac783',cream:'#fff3d7',ink:'#26372e',blue:'#346b90',pink:'#d26986'},
 teams:[{name:'Copperfinches',color:'#f0c56c'},{name:'Ribbonfoxes',color:'#f5a1b4'},{name:'Pinewhiskers',color:'#9bd3bd'},{name:'Snowlarks',color:'#a6ccec'}],
 settings:{duration:60,minDuration:30,maxDuration:90,hintMinutes:1,cooldownSeconds:10,pin:'2412',introSeconds:60,tourSeconds:56, maxTeams:4,minPlayers:2,maxPlayers:6,showCredit:true,credit:'An original family adventure'},
 audio:{wave:'sine',theme:[220,329.63,277.18,415.3,369.99,246.94],themeIntervalMs:6500,themeSpacingSeconds:.65,themeDurationSeconds:2,themeVolume:.014,sounds:{key:[[880,0,.09,.025]],wrong:[[146.83,0,.3,.035],[155.56,.08,.25,.025]],hint:[[493.88,0,.4],[659.25,.18,.55]],unlock:[[329.63,0,.6],[493.88,.13,.7],[739.99,.3,.9]],final:[[246.94,0,.6],[369.99,.16,.6],[415.3,.32,.6],[622.25,.52,.8],[493.88,.75,1],[739.99,1.05,1.8]]}},
 timing:{wrongMessageMs:5000,unlockMessageMs:15000,hintMessageMs:900000,hostMessageMs:900000,noticeMs:6000,snapshotMs:500,heartbeatMs:700,frameMs:100,popupMs:500,revokeMs:1000},
 scene:{gears:[[657,499,25],[711,482,21],[758,512,23],[642,559,26],[698,549,26],[750,575,24],[693,608,27]]},
 effects:{moteColors:['rgba(255,222,151,.18)','rgba(255,237,191,.36)'],motes:22,motesPerGear:3,maxPixelRatio:1.5},
 motion:{gear:24,reverseGear:19,clock:30,flame:4,snow:14,confetti:6,drift:60,rise:.7,helper:3,interaction:.15},
 story:{letter:'Dear keepers of small wonders,\nThe great clock has stopped! Without its seven brass gears, our wind-up helpers cannot carry a single toy to the delivery sleigh. I tucked each gear safely away, then spilled my notes across the workshop. Please follow the clues together, open the seven envelopes in order, and keep every gear you find. Old hands and young eyes make the finest team.\nWith a hopeful heart,\nElda Wrenwhistle, toymaker of Brindlefern',
 intro:[['Christmas Eve • Brindlefern','Snow settles on the little roofs. Inside Elda Wrenwhistle’s workshop, the last toys wait for their ribbons.'],['One tick away from wonder','Nimblet, the smallest wind-up helper, reaches for a parcel… and stops. The great clock has fallen silent.'],['A small, brass mystery','Seven gears are missing. Elda’s notes hold the way to every one, if your family can read them together.'],['The workshop is counting on you','Find the gears. Keep them safe. Bring the clock back to life before the toys leave for delivery.']],
 rules:['Read and handle the printed props together. Nothing needs force or outside knowledge.','Choose your team before entering a code. Open only the envelope named by the console.','Keep every brass gear. Ask for help whenever you like: each hint adds time to your score.'],
 beats:['The lanterns wake. Nimblet’s brass fingers twitch. Open envelope 1 and keep the Lantern gear.','The tree lights glow from tip to root. Open envelope 2 and keep the Fir gear.','The letter flutters in a warm draught. Open envelope 3 and keep the Quill gear.','A shelf of tiny bells shivers with music. Open envelope 4 and keep the Bell gear.','The parcel train rolls one careful inch. Open envelope 5 and keep the Gift gear.','A golden spark skips through the workshop. Open envelope 6 and keep the Spark gear.','The last socket shines. Open envelope 7, keep the Compass gear, and follow the delivery route.','The great clock sings again. The helpers are on their way. Christmas Eve is full of little wonders!'],
 finale:'You brought the workshop back to life. Nimblet winds the sleigh bell, Elda ties the last ribbon, and seven little gears turn as one.',soClose:'So close, little wonder-makers. Elda has a few helpful notes left. Let’s finish the clock together.'},
 puzzles:[
 {id:1,title:'The lantern wheel',type:'word',answer:'LANTERN',envelope:1,gear:{name:'LANTERN',letter:'E'},hide:'Inside a book',
 instructions:'Set outer A against inner F. For each letter in the message, find it on the INNER ring, then read the OUTER letter beside it. Keep the rings still. Decode the whole message.',
 prop:{alphabet:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',shift:5,cipher:'QFSYJWS',seal:{name:'CEDAR',color:'GREEN'}},
 hints:['Two rings, two alphabets. The little alignment instruction matters.','Put outer A beside inner F. Find Q on the inner ring; the outer letter is L. Continue without turning the rings.','The word is LANTERN. Enter it, then open envelope 1.']},
 {id:2,title:'The ribbon tree',type:'digits',answer:'4726',envelope:2,gear:{name:'FIR',letter:'O'},hide:'Beside a plant',
 instructions:'Start at the star. Follow the ONE red delivery ribbon down to the trunk. Read the colours of the four ornaments it touches, in order. Use the ornament key to turn those colours into four digits.',
 prop:{start:'star',end:'trunk',links:[['star','a'],['a','b'],['b','c'],['c','d'],['d','trunk']],ornaments:[{id:'a',color:'RED',x:50,y:25},{id:'b',color:'GREEN',x:32,y:43},{id:'c',color:'GOLD',x:68,y:60},{id:'d',color:'BLUE',x:42,y:78},{id:'e',color:'PINK',x:70,y:40},{id:'f',color:'WHITE',x:23,y:66}],key:{RED:4,GREEN:7,GOLD:2,BLUE:6,PINK:9,WHITE:3},seal:{name:'RIBBON',color:'RED'}},
 hints:['The plain branches are not your route. Look for the single red ribbon.','From the star the ribbon touches RED, GREEN, GOLD, then BLUE. Look up each colour in the key.','The four digits are 4726. Enter them, then open envelope 2.']},
 {id:3,title:'Elda’s scattered letter',type:'arrows',answer:'UP RIGHT DOWN LEFT',envelope:3,gear:{name:'QUILL',letter:'C'},hide:'Under a cushion',
 instructions:'Rebuild the eight pieces into one letter. Match the uneven cut edges and the gold frame. Read ONLY the four arrow stamps, from the top of the finished letter to the bottom.',
 prop:{rows:[['My dear helper, look to the','high shelf for the first parcel.','UP'],['Then the ribbon leads to the','right-hand workbench.','RIGHT'],['The smallest box sleeps on the','low shelf beneath the train.','DOWN'],['Our last ribbon waits on the','left-hand peg. With love, Elda.','LEFT']],cols:2,edges:[17,29,43,61,73,89,103,127,149,163],seal:{name:'STAR',color:'GOLD'}},
 hints:['The outside gold frame makes a rectangle. The cut edges each have a different shape.','There are two columns and four rows. Ignore direction words in the sentences; read the four arrow stamps from top to bottom.','The stamps say UP, RIGHT, DOWN, LEFT. Enter those four arrows, then open envelope 3.']},
 {id:4,title:'The tidy toy shelf',type:'symbols',answer:'KEY',envelope:4,gear:{name:'BELL',letter:'R'},hide:'In an empty drawer',
 instructions:'Every row AND every column must contain exactly one STAR, one MOON, one BELL and one KEY. One square is wrong. Which symbol SHOULD be in that square? Enter the replacement symbol, not the symbol already there.',
 prop:{symbols:['STAR','MOON','BELL','KEY'],grid:[['STAR','MOON','BELL','KEY'],['MOON','BELL','KEY','STAR'],['BELL','STAR','STAR','MOON'],['KEY','STAR','MOON','BELL']],seal:{name:'MOON',color:'BLUE'}},
 hints:['One row has a repeated symbol and a missing symbol. A column does too.','Row 3 and column 2 meet at the wrong square. Both are missing the same symbol.','A KEY belongs in row 3, column 2. Select KEY, then open envelope 4.']},
 {id:5,title:'The parcel tally',type:'digits',answer:'137',envelope:5,gear:{name:'GIFT',letter:'E'},hide:'In a clean gift bag',
 instructions:'Elda’s special delivery has a RED ribbon AND exactly TWO star stamps. Add the numbers on only those tags. Enter the three-digit total. A red ribbon alone is not enough!',
 prop:{tags:[{name:'Pocket train',ribbon:'RED',stars:2,value:46},{name:'Velvet fox',ribbon:'RED',stars:2,value:28},{name:'Little sailboat',ribbon:'RED',stars:2,value:63},{name:'Brass bird',ribbon:'RED',stars:1,value:81},{name:'Moon pony',ribbon:'GREEN',stars:2,value:52},{name:'Tiny drum',ribbon:'GREEN',stars:1,value:19}]},
 hints:['Two conditions must be true on each tag: red ribbon AND two star stamps.','Only the Pocket train, Velvet fox and Little sailboat belong in this delivery. Add 46, 28 and 63.','46 + 28 + 63 = 137. Enter 137, then open envelope 5.']},
 {id:6,title:'The sleeping message',type:'word',answer:'SPARK',envelope:6,gear:{name:'SPARK',letter:'J'},hide:'Beside a battery candle',
 instructions:'Keep the printed side facing you. Fold back at the LEFT dashed line and forward at the MIDDLE dashed line, tucking the shaded band BEHIND the page. Bring the right brass rail to the left rail: A to A, B to B. Read the five joined block letters from TOP TO BOTTOM. Do not cut.',
 prop:{"word":"SPARK","leftRail":46,"rightRail":126,"foldLines":[46,86],"glyphs":{"A":["01110","10001","10001","11111","10001","10001","10001"],"B":["11110","10001","10001","11110","10001","10001","11110"],"C":["01111","10000","10000","10000","10000","10000","01111"],"D":["11110","10001","10001","10001","10001","10001","11110"],"E":["11111","10000","10000","11110","10000","10000","11111"],"F":["11111","10000","10000","11110","10000","10000","10000"],"G":["01111","10000","10000","10111","10001","10001","01111"],"H":["10001","10001","10001","11111","10001","10001","10001"],"I":["11111","00100","00100","00100","00100","00100","11111"],"J":["00111","00010","00010","00010","10010","10010","01100"],"K":["10001","10010","10100","11000","10100","10010","10001"],"L":["10000","10000","10000","10000","10000","10000","11111"],"M":["10001","11011","10101","10101","10001","10001","10001"],"N":["10001","11001","10101","10011","10001","10001","10001"],"O":["01110","10001","10001","10001","10001","10001","01110"],"P":["11110","10001","10001","11110","10000","10000","10000"],"Q":["01110","10001","10001","10001","10101","10010","01101"],"R":["11110","10001","10001","11110","10100","10010","10001"],"S":["01111","10000","10000","01110","00001","00001","11110"],"T":["11111","00100","00100","00100","00100","00100","00100"],"U":["10001","10001","10001","10001","10001","10001","01110"],"V":["10001","10001","10001","10001","10001","01010","00100"],"W":["10001","10001","10001","10101","10101","10101","01010"],"X":["10001","10001","01010","00100","01010","10001","10001"],"Y":["10001","10001","01010","00100","00100","00100","00100"],"Z":["11111","00001","00010","00100","01000","10000","11111"]},"fragments":[{"left":["011","100","100","011","000","000","111"],"right":["11","00","00","10","01","01","10"]},{"left":["111","100","100","111","100","100","100"],"right":["10","01","01","10","00","00","00"]},{"left":["011","100","100","111","100","100","100"],"right":["10","01","01","11","01","01","01"]},{"left":["111","100","100","111","101","100","100"],"right":["10","01","01","10","00","10","01"]},{"left":["100","100","101","110","101","100","100"],"right":["01","10","00","00","00","10","01"]}]},
 hints:['The marks are fragments, not whole letters yet. Tuck the shaded band behind the page; use the little side-view diagram.','Fold back at the left dashed line and forward at the middle line. Match A to A and B to B. Each pair of marks forms one complete block letter. Read the five letters from TOP TO BOTTOM.','Read from top to bottom: the joined block letters spell SPARK. Enter it, then open envelope 6.']},
 {id:7,title:'The inventory seals',type:'colors',answer:'BLUE GREEN GOLD RED',envelope:7,gear:{name:'COMPASS',letter:'I'},hide:'Beside a pair of shoes',
 instructions:'Four earlier props carry a small square INVENTORY SEAL. Find them again. Enter the seal COLOURS in this order: MOON, CEDAR, STAR, RIBBON. Use only the named square seals, not team colours or other decorations.',
 prop:{order:['MOON','CEDAR','STAR','RIBBON'],sourceIds:[1,2,3,4]},
 hints:['Keep the earlier props on the table. Look in the bottom corner for the small square labelled INVENTORY SEAL.','MOON is on the toy shelf, CEDAR on the wheel instructions, STAR on the letter, and RIBBON on the tree. Read their printed colour names.','Enter BLUE, GREEN, GOLD, RED. Open envelope 7 and keep its gear.']},
 {id:8,title:'The delivery route',type:'word',answer:'REJOICE',envelope:null,
 instructions:'Lay out all seven brass gears. Follow this route from the bell to the gift. At each stop, copy the letter from the matching named gear. Read the seven letters as one word to restart the clock.',
 prop:{route:['BELL','LANTERN','SPARK','FIR','COMPASS','QUILL','GIFT']},
 hints:['Every gear you kept has a name and one letter. The final route gives their order.','Use BELL, LANTERN, SPARK, FIR, COMPASS, QUILL, GIFT. Their letters begin R, E, J…','The final word is REJOICE. Enter it and bring the workshop back to life.']}
 ],
 ui:{sceneAlt:'A candlelit wooden toy workshop, snowy village windows, a great brass clock and wind-up toys',setup:'Prepare the workshop',gm:'Game master',openGM:'Open game master window',team:'Choose your team',teamShort:'Team',code:'Enter your code',submit:'Try the lock',clear:'Clear',back:'Backspace',hint:'Ask for a hint',ready:'Ready for the adventure?',start:'Begin the story',skip:'Skip intro',rules:'A few workshop rules',go:'Start the clock',pause:'Pause',resume:'Resume',muted:'Sound off',sound:'Sound on',fullscreen:'Fullscreen',tries:'tries',try:'try',rehearsal:'REHEARSAL',print:'Print room',keep:'Keep racing',finish:'Celebrate together',escape:'The clock is turning!',soClose:'Every wonder is worth finishing',nextReveal:'Reveal the next note',close:'Close',unlock:'Open the lock',undo:'Undo',redo:'Redo',message:'Message to the workshop',send:'Send message',export:'Export game',import:'Import game',reset:'Prepare another round',footer:'P pause · H hint · M sound · F fullscreen',saved:'Your evening is saved on this device.',pin:'Enter the host PIN',wrongPin:'That PIN does not match. Try again.',paused:'The workshop is taking a little breath.',cooldown:'Let the lock rest',notStarted:'The clock is waiting',setupSteps:['Welcome','Teams & time','Print & hide','Rehearsal','Ready'],prepIntro:'A family escape room for ages 8 and up. One to four teams, two to six people each. Allow 45–60 minutes of play, plus preparation.',prepMaterials:'You need: one kit per team, seven envelopes per team, scissors, a split pin or paper fastener for each wheel, and a printer. An adult cuts the scattered letter before play. No food, flames or fragile objects are needed.',prepHint:'Host-only pages contain answers. Keep them away from the teams. Everyone can share one screen, but each team needs its own paper kit.',rehearsalNote:'Try every lock in order. Answers are visible here. This rehearsal never changes or saves a real game.',timeout:'The delivery lantern is glowing. Elda will help everyone finish.',damaged:'A saved game could not be read. It has been kept untouched. Export the damaged save or explicitly start a fresh round.',popup:'Allow this page to open a second window, then try again.',waiting:'Waiting for the TV console. Keep the original window open.',connected:'Connected to the TV console',disconnected:'The TV console is reconnecting…',hintConfirm:'The next hint adds {n} to your score. Ask for it?',handOpen:'Open this lock by hand (recorded in the log).',cert:'We brought the clock back to life!',sign:'Small hands. Big ideas. Christmas wonders.',timeLabel:'TIME LEFT',chapterLabel:'THE WORKSHOP',photoTitle:'The Clockwork Toy Workshop',photoCaption:'Seven gears. One family. A little Christmas magic.'},
 print:{title:'Workshop paper kit',pageFooter:'100% scale • Keep earlier props',storyTitle:'A letter from Elda',wheelTitle:'The two-ring lantern wheel',wheelNote:'Adult: cut both circles and pierce the centre dots. Put the smaller ring over the larger. Join loosely with a paper fastener. If no fastener is available, hold the centres together with a fingertip.',cutNote:'Cut on the dashed outlines. Keep the printed labels with the matching envelope.',letterNote:'HOST: cut on all three horizontal jagged lines and the vertical jagged line to make EIGHT pieces. Shuffle the pieces before sealing envelope 2. Give the team the separate instruction strip.',foldBand:'SLEEPING HOURS • TUCK THIS BAND BEHIND',foldNote:'Side view: pinch into a Z. Both printed letter rows must face you.',gearNote:'HOST: cut out the seven labels and seven gears. Put each gear INSIDE the envelope with the same number. Stick the matching label outside. Do not give the gears out early.',certificate:'This certifies that',certificateEnd:'found seven brass gears, helped Elda and Nimblet, and filled Brindlefern with Christmas wonder.',hostTitle:'Host guide • keep secret',hintTitle:'Hint cards • host only',reset:'Collect every prop and gear. Export the previous result if wanted. Use Prepare another round. Recut or reshuffle the letter, reset the cipher wheel, unfold the fold page, and refill all seven envelopes. Check the seals and labels against this list.',safety:'Hide props in reachable, safe places. Avoid flames, food, electrical equipment, breakable objects and private drawers. Tell players the boundaries. Keep scissors with an adult.',hide:['Envelope 1: Lantern gear + ribbon tree','Envelope 2: Fir gear + eight scattered letter pieces + instruction strip','Envelope 3: Quill gear + tidy toy shelf','Envelope 4: Bell gear + parcel tally tags','Envelope 5: Gift gear + sleeping message fold page','Envelope 6: Spark gear + inventory seal search','Envelope 7: Compass gear + delivery route'],startPack:'Start pack (outside envelopes): story letter, wheel instructions, assembled cipher wheel. Retain every used prop for the inventory search.'},
 tour:[{at:0,view:'setup',caption:'Welcome to a Christmas escape room made for the whole family.'},{at:6,view:'intro',caption:'A cinematic story begins: seven brass gears have vanished.'},{at:13,view:'wrong',caption:'Choose a team, try a code. A gentle ten-second rest discourages guessing.'},{at:19,view:'unlock',caption:'A solved lock wakes the workshop and opens the next envelope.'},{at:25,view:'hint',caption:'Three helpful steps per puzzle. Each hint adds one minute to the score.'},{at:31,view:'race',caption:'Up to four teams race with identical, colour-matched paper kits.'},{at:37,view:'gm',caption:'A private game master screen controls the evening and keeps a live log.'},{at:43,view:'escape',caption:'Seven gears, a final word, and a celebration for every wonder-maker.'},{at:50,view:'print',caption:'Print the props, labels, hints, host guide and certificates. Play entirely offline.'}]
,
 // Interface and print copy. {0}, {1}… are values filled by the app.
 copy:{
 "finished_together_lane":"Finished together · {0}",
 "host_gear_letter":"{0} gear · Letter {1}",
 "host_final_word":"Final word: {0}",
 "left_marks":"LEFT MARKS",
 "right_marks":"RIGHT MARKS",
 "test_fold_fragments":"Unfolded columns contain incomplete marks, never full letter glyphs",
 "fragment_error":"Unfolded columns must contain only incomplete marks.",
 "test_cooperative_scene":"Cooperative finale restores the scene without inventing escape scores",
 "test_host_answer_list":"Host desk lists all eight answers and all seven gear letters",
 "default_duration_error":"Choose a default duration between 30 and 90 minutes.",
 "default_hint_error":"Choose a hint cost between 0 and 10 minutes.",
 "default_color_error":"A workshop colour is not a valid CSS colour.",
 "saved_controls_error":"The saved host controls are damaged.",
 "saved_log_error":"The saved activity log has a damaged entry.",
 "saved_celebration_error":"The saved celebration names a missing team.",
 "tour_wrong_log":"Copperfinches · Lock 1 · a little rethink",
 "tour_unlock_log":"Copperfinches · Lock 1 opened · Envelope 1",
 "tour_hint_log":"Copperfinches · Lock 4 · hint 1",
 "photo_moment":"PHOTO MOMENT",
 "letter_fit_error":"The eight letter pieces must fit in exactly one way.",
  "use_strict": "use strict",
  "there_must_be_seven_puzzles_and_one_final_puzzle": "There must be seven puzzles and one final puzzle.",
  "the_host_pin_must_have_four_digits": "The host PIN must have four digits.",
  "the_lock_rest_must_be_at_least_one_second": "The lock rest must be at least one second.",
  "the_seven_envelopes_must_be_numbered_1_to_7_once": "The seven envelopes must be numbered 1 to 7, once each.",
  "puzzle_needs_a_number_an_answer_and_three_hints": "Puzzle {0} needs a number, an answer and three hints.",
  "puzzle_the_printed_facts_do_not_produce_its_answ": "Puzzle {0}: the printed facts do not produce its answer.",
  "puzzle": "Puzzle {0}: {1}",
  "this_game_belongs_to_a_different_workshop_editio": "This game belongs to a different workshop edition.",
  "the_saved_screen_is_not_recognised": "The saved screen is not recognised.",
  "the_saved_time_is_damaged": "The saved time is damaged.",
  "choose_one_to_four_teams": "Choose one to four teams.",
  "the_host_settings_are_damaged": "The host settings are damaged.",
  "a_saved_team_record_is_damaged": "A saved team record is damaged.",
  "the_saved_activity_log_is_damaged": "The saved activity log is damaged.",
  "a_saved_message_is_damaged": "A saved message is damaged.",
  "start_the_clock_before_using_a_lock": "Start the clock before using a lock.",
  "the_workshop_is_paused_resume_before_using_a_loc": "The workshop is paused. Resume before using a lock.",
  "the_time_has_ended_finish_together_with_elda_s_n": "The time has ended. Finish together with Elda’s notes.",
  "choose_a_team_first": "Choose a team first.",
  "this_team_has_already_brought_the_clock_to_life": "This team has already brought the clock to life.",
  "the_story_is_already_prepared": "The story is already prepared.",
  "the_story_must_come_first": "The story must come first.",
  "read_the_rules_before_starting": "Read the rules before starting.",
  "the_workshop_clock_started": "The workshop clock started.",
  "only_a_running_game_can_pause": "Only a running game can pause.",
  "the_host_paused_the_workshop": "The host paused the workshop.",
  "the_host_resumed_the_workshop": "The host resumed the workshop.",
  "time_can_be_changed_while_a_game_is_running": "Time can be changed while a game is running.",
  "add_or_remove_up_to_90_minutes_at_once": "Add or remove up to 90 minutes at once.",
  "the_host_changed_the_time_by_minutes": "The host changed the time by {0} minutes.",
  "let_the_lock_rest_for_seconds": "Let the lock rest for {0} seconds.",
  "enter_a_short_code": "Enter a short code.",
  "a_little_rethink_let_the_lock_rest_for_seconds": "{0}: a little rethink. {1}. Let the lock rest for {2} seconds.",
  "lock_not_yet": "{0} · Lock {1} · {2} · not yet",
  "all_three_hints_for_this_lock_are_already_open": "All three hints for this lock are already open.",
  "hint": "{0} · Hint {1}: {2}",
  "lock_hint": "{0} · Lock {1} · hint {2}",
  "lock_opened_by_the_host": "{0} · Lock {1} opened by the host.",
  "write_a_message_of_1_to_1200_characters": "Write a message of 1 to 1200 characters.",
  "there_is_still_time_on_the_clock": "There is still time on the clock.",
  "elda_offered_to_finish_the_clock_together": "Elda offered to finish the clock together.",
  "there_is_no_live_evening_to_end": "There is no live evening to end.",
  "the_host_invited_everyone_to_finish_together": "The host invited everyone to finish together.",
  "elda_s_notes_open_after_the_time_ends": "Elda’s notes open after the time ends.",
  "that_workshop_action_is_not_recognised": "That workshop action is not recognised.",
  "lock_opened": "{0} · Lock {1} opened{2}",
  "nothing_to": "Nothing to {0}.",
  "the_browser_could_not_save_this_game_use_export_": "The browser could not save this game. Use Export game to keep a copy.",
  "the_undo_history_is_damaged": "The undo history is damaged.",
  "the_game_history_is_damaged": "The game history is damaged.",
  "import_kept_your_current_game_safe": "Import kept your current game safe. {0}",
  "the_ribbon_loops": "The ribbon loops.",
  "the_ribbon_must_have_exactly_one_onward_path": "The ribbon must have exactly one onward path.",
  "the_shelf_must_have_exactly_one_repair": "The shelf must have exactly one repair.",
  "the_letter_halves_do_not_join": "The printed mark fragments do not form one unambiguous letter.",
  "each_inventory_name_needs_exactly_one_seal": "Each inventory name needs exactly one seal.",
  "a_christmas_eve_adventure": "A CHRISTMAS EVE ADVENTURE",
  "time_left": "Time left {0}",
  "host_controls": "Host controls",
  "team_progress": "Team progress",
  "selected": " selected",
  "locks_opened": "{0}, {1} locks opened, {2}",
  "8_locks": "{0}/8 locks · {1} · {2}",
  "code_entry": "Code entry",
  "all_eight_locks_open": "ALL EIGHT LOCKS OPEN",
  "including": "{0} · {1} including {2}",
  "view_celebration": "View celebration",
  "lock_of_8": "LOCK {0} OF 8 · {1}",
  "type_or_tap": "TYPE OR TAP",
  "enter": "Enter",
  "arrow": "Arrow",
  "keys": "keys ",
  "start_or_resume_the_clock_before_entering_a_code": "Start or resume the clock before entering a code.",
  "enter_a_code_first": "Enter a code first.",
  "a_little_help_from_elda": "A little help from Elda",
  "keep_thinking": "Keep thinking",
  "christmas_eve": "CHRISTMAS EVE • {0}",
  "the_clock_has_fallen_silent": "The clock has fallen silent",
  "a_workshop_full_of_wonder": "A workshop full of wonder",
  "found": "{0} found",
  "celebration": "Celebration",
  "a_little_christmas_miracle": "A LITTLE CHRISTMAS MIRACLE",
  "wonder_makers_together": "WONDER-MAKERS, TOGETHER",
  "play_time": "{0} play time + {1} ({2})",
  "ending_so_close": "ending so-close",
  "the_last_delivery_can_wait_a_moment": "THE LAST DELIVERY CAN WAIT A MOMENT",
  "elda_s_note_of_8": "ELDA’S NOTE {0} OF {1}",
  "open_envelope_and_keep_its_brass_gear": "Open envelope {0} and keep its brass gear.",
  "the_great_clock_is_ready_to_turn": "The great clock is ready to turn.",
  "paused": "Paused",
  "keys_button_submit_code": ".keys button,#submit-code",
  "dismiss_message": "Dismiss message",
  "chapter_of_4": "CHAPTER {0} OF 4",
  "before_the_first_tick": "BEFORE THE FIRST TICK",
  "wrong_codes_rest_for_seconds_each_hint_adds_to_y": "Wrong codes rest for {0} seconds. Each hint adds {1} to your ranking time. Lowest total wins; equal totals share a place.",
  "gather_your_wonder_makers": "Gather your wonder-makers",
  "number_of_teams_1_4": "Number of teams (1–4)",
  "team_name": "Team {0} name",
  "kit_colour": "Kit colour",
  "people_2_6": "People (2–6)",
  "duration_30_90_minutes": "Duration (30–90 minutes)",
  "minutes_per_hint": "Minutes per hint",
  "wrong_code_rest_seconds": "Wrong-code rest (seconds)",
  "host_pin_4_digits": "Host PIN (4 digits)",
  "the_host_pin_needs_exactly_four_digits": "The host PIN needs exactly four digits.",
  "print_cut_tuck_away": "Print, cut, tuck away",
  "suggested_hiding_place": "{0}. Suggested hiding place: {1}.",
  "lock": "Lock {0}: {1}",
  "try_the_answer_above": "Try the answer above",
  "not_quite_copy_the_displayed_rehearsal_answer_an": "Not quite. Copy the displayed rehearsal answer and try again.",
  "try_rehearsal_lock": "Try rehearsal lock",
  "all_eight_rehearsal_locks_opened": "All eight rehearsal locks opened",
  "your_real_game_is_untouched_you_are_ready_to_wel": "Your real game is untouched. You are ready to welcome the teams.",
  "everything_has_its_place": "Everything has its place",
  "minutes_per_hint_2": "{0} · {1} minutes · {2} per hint",
  "give_each_team_its_start_pack_keep_all_seven_env": "Give each team its start pack. Keep all seven envelopes closed. Put this window on the TV; open the private game master window on the host’s screen.",
  "back": "Back",
  "skip_rehearsal": "Skip rehearsal",
  "continue": "Continue",
  "watch_the_56_second_tour": "Watch the 56-second tour",
  "four_digit_pin": "Four-digit PIN",
  "open_host_controls": "Open host controls",
  "the_tv_sent_a_game_record_that_could_not_be_read": "The TV sent a game record that could not be read.",
  "private_host_desk": "PRIVATE HOST DESK",
  "single_screen_host_controls_esc_closes_this_pane": "Single-screen host controls · Esc closes this panel",
  "start_intro": "Start intro",
  "show_rules": "Show rules",
  "1_minute": "+1 minute",
  "1_minute_2": "−1 minute",
  "5_minutes": "+5 minutes",
  "end_finish_together": "End & finish together",
  "end_the_timed_game_and_finish_the_remaining_puzz": "End the timed game and finish the remaining puzzles together?",
  "finish_together": "Finish together?",
  "this_ends_the_timed_race_and_opens_elda_s_helpfu": "This ends the timed race and opens Elda’s helpful notes.",
  "finish_together_2": "Finish together",
  "keep_playing": "Keep playing",
  "clear_tv_message": "Clear TV message",
  "8_locks_2": "{0} · {1}/8 locks",
  "penalty": "{0} · penalty {1}",
  "answer": "ANSWER: {0}",
  "hint_2": "Hint {0}{1}: {2}",
  "push_next_hint": "Push next hint",
  "escaped_in_total": "Escaped in {0} · total {1}",
  "all_answers_hint_ladders": "All answers & hint ladders",
  "live_workshop_log": "Live workshop log",
  "no_real_actions_recorded_yet": "No real actions recorded yet.",
  "prepare_another_round": "Prepare another round?",
  "export_this_evening_first_if_you_want_to_keep_it": "Export this evening first if you want to keep its results. A new setup replaces the current game.",
  "start_a_fresh_setup": "Start a fresh setup",
  "keep_this_round": "Keep this round",
  "an_original_christmas_escape_room": "AN ORIGINAL CHRISTMAS ESCAPE ROOM",
  "fullscreen_is_not_available_on_this_screen": "Fullscreen is not available on this screen.",
  "escape": "Escape",
  "tab": "Tab",
  "backspace": "Backspace",
  "delete": "Delete",
  "workshopsans_sans_serif": "WorkshopSans, sans-serif",
  "inventory_seal": "INVENTORY SEAL",
  "letter": " letter",
  "host_keep_secret": "HOST • KEEP SECRET",
  "two_cipher_wheel_circles_with_matching_centre_do": "Two cipher wheel circles with matching centre dots",
  "inner_ring": "INNER RING",
  "outer_ring": "OUTER RING",
  "pierce_the_centre_dot": "Pierce the centre dot",
  "outer_a_inner_f": "Outer A ↔ inner F",
  "cut_the_big_circle": "Cut the big circle.",
  "cut_the_small_circle": "Cut the small circle.",
  "join_their_centre_dots": "Join their centre dots.",
  "do_not_trim_off_letters": "Do not trim off letters.",
  "ribbon_tree_and_colour_to_digit_ornament_key": "Ribbon tree and colour-to-digit ornament key",
  "m340_22l182_213h238l110_389h191l72_539h608l488_3": "M340 22L182 213H238L110 389H191L72 539H608L488 389H568L441 213H496Z",
  "a_letter_with_eight_uniquely_fitting_pieces_and_": "A letter with eight uniquely fitting pieces and arrow stamps",
  "m20_23h660v513h20z": "M20 23H660V513H20Z",
  "l_l_l": "L{0} {1}L{2} {3}L{4} {5}",
  "four_by_four_toy_shelf_grid": "Four by four toy shelf grid",
  "six_gift_tags_with_ribbon_colours_star_stamps_an": "Six gift tags with ribbon colours, star stamps and parcel numbers",
  "m_hvhl_vz": "M{0} {1}H{2}V{3}H{4}L{5} {6}V{7}Z",
  "ribbon": "{0} RIBBON",
  "a_paper_z_fold_joins_the_upper_and_lower_halves_": "A vertical Z-fold joins left and right marks into five block letters",
  "fold_1_back": "FOLD 1 · BACK",
  "fold_2_forward": "FOLD 2 · FORWARD",
  "m0_h180": "M0 {0}H180",
  "m0_41h180m0_123h180": "M0 41H180M0 123H180",
  "join_both_brass_rails_a_to_a_b_to_b": "JOIN BOTH BRASS RAILS: A TO A, B TO B",
  "m123_164h148l135_174h162": "M123 164H148L135 174H162",
  "side_view": "Side view →",
  "start_with_the_lantern_wheel": "Start with the lantern wheel",
  "message_enter_the_decoded_word_on_the_tv_open_an": "Message: {0}. Enter the decoded word on the TV. Open an envelope only when the TV tells you its number. Keep every prop.",
  "host_detach_the_instruction_strip_above_cut_the_": "HOST: detach the instruction strip above. Cut the letter along every jagged line into eight pieces. Shuffle and seal in envelope 2.",
  "enter_the_replacement_symbol_star_moon_bell_or_k": "Enter the REPLACEMENT symbol: STAR, MOON, BELL or KEY. Only one single-square repair makes every row and column correct.",
  "0_auto": "0 auto",
  "find_these_named_seals": "Find these named seals",
  "the_colour_name_is_printed_beside_each_seal_so_c": "The colour name is printed beside each seal, so colour vision or a colour printer is not required. Team colours are only for keeping kits separate.",
  "enter_four_colours_using_the_colour_keypad_keep_": "Enter four colours using the colour keypad. Keep all your brass gears for the final delivery route.",
  "8_the_final_delivery_route": "8. The final delivery route",
  "the_clock_s_seven_sockets": "The clock’s seven sockets",
  "write_one_letter_from_each_matching_gear_in_rout": "Write one letter from each matching gear in route order. The seven letters make a word. Enter that word on the TV.",
  "envelope_labels_brass_gears": "Envelope labels & brass gears",
  "envelope": "ENVELOPE {0}\n{1}",
  "gear": "GEAR {0} · {1}",
  "a_certificate_of_small_wonders": "A certificate of small wonders",
  "team": "Team {0}",
  "date_total_time": "Date & total time",
  "with_warm_thanks_elda_wrenwhistle_nimblet": "With warm thanks, Elda Wrenwhistle & Nimblet",
  "before_your_guests_arrive": "Before your guests arrive",
  "print_one_kit_per_team_in_a4_or_us_letter_at_100": "Print one kit per team in A4 or US Letter at 100%. Host pages print once. The supplied PDFs include all four default kits; use the app to print only the teams you need.",
  "assemble_each_cipher_wheel_adult_cuts_the_two_ci": "Assemble each cipher wheel: adult cuts the two circles, pierces their dots and joins them with a paper fastener. Set outer A beside inner F.",
  "cut_elda_s_letter_on_its_jagged_vertical_and_thr": "Cut Elda’s letter on its jagged vertical and three horizontal lines into eight pieces. Detach its instruction strip and seal first; shuffle the eight letter pieces. Keep the STAR inventory seal with the strip.",
  "cut_out_seven_envelope_labels_and_seven_gear_car": "Cut out seven envelope labels and seven gear cards. Put each gear inside the matching envelope, together with the next puzzle listed on the next page. Do not give gear cards out in the start pack.",
  "choose_safe_hiding_places_for_a_shared_room_hide": "Choose safe hiding places. For a shared room, hide each team’s matching envelope in a separate spot of the same kind. Print names identify kits even without colour.",
  "run_the_setup_wizard_pick_duration_hint_cost_coo": "Run the setup wizard. Pick duration, hint cost, cooldown and a private PIN. Try the rehearsal; it does not record a real game.",
  "connect_the_laptop_to_the_tv_open_the_game_maste": "Connect the laptop to the TV. Open the game master window and move it to the laptop screen; keep the main console on the TV. Keep host pages out of sight.",
  "host_hiding_checklist": "Host hiding checklist",
  "your_place": "{0}\nYour place: __________",
  "host_screens_timing": "Host screens & timing",
  "running_the_evening": "Running the evening",
  "the_story_lasts_60_seconds_and_is_skippable_read": "The story lasts 60 seconds and is skippable. Read the rules, then start the clock. Teams select their name before entering a code. Only the named next envelope may open. Earlier props stay on the table.",
  "p_pauses_all_game_timers_including_keypad_rests_": "P pauses all game timers, including keypad rests. H offers the selected team a hint. M toggles sound; F requests fullscreen. In a word code field, type normally, including P, H, M and F. Tab to leave the code field before using shortcuts.",
  "if_using_one_mirrored_phone_or_tablet_use_game_m": "If using one mirrored phone or tablet, use Game master and your four-digit PIN. Esc closes the panel; touch users use Close. The second window is optional. Only the TV console counts time and plays sound.",
  "wrong_codes_rest_the_keypad_attempts_are_logged_": "Wrong codes rest the keypad; attempts are logged. Hints have three steps: nudge, method, answer. Each used step adds the chosen minutes to that team’s score, without removing shared clock time. Lowest escape time + hint penalty wins. Equal totals share a place.",
  "a_calm_host_is_a_wonderful_clue": "A calm host is a wonderful clue",
  "offer_a_nudge_before_frustration_grows_read_inst": "Offer a nudge before frustration grows. Read instructions aloud when needed. Let a grandparent add the tally and a child turn the wheel. You can pause, adjust time, push messages, undo/redo or open a lock by hand. All real actions are logged.",
  "host_answer_key_reset": "Host answer key & reset",
  "opens_envelope": "Opens envelope {0}",
  "restarts_the_clock": "Restarts the clock",
  "when_the_clock_reaches_zero": "When the clock reaches zero",
  "elda_invites_everyone_to_finish_together_reveal_": "Elda invites everyone to finish together. Reveal one helpful note at a time, work the remaining props, then select Celebrate together. There is no fail screen. Escaped teams may keep their recorded scores; all children join the celebration.",
  "saving_and_another_round": "Saving and another round",
  "autosave_uses_only_this_browser_on_this_device_r": "Autosave uses only this browser on this device. Reload the original TV window to resume, including elapsed sleep time. Export a game to move or keep it; import a saved JSON in the PIN panel. A damaged save stays untouched until you explicitly replace it.",
  "each_revealed_step_costs_the_configured_hint_min": "Each revealed step costs the configured hint minutes. Default: {0}.",
  "a_photo_from_the_workshop": "A photo from the workshop",
  "we_brought_the_clock_back_to_life": "WE BROUGHT THE CLOCK BACK TO LIFE",
  "the_host_s_paper_cupboard": "THE HOST’S PAPER CUPBOARD",
  "print_at_100_scale_with_background_graphics_enab": "Print at 100% scale with background graphics enabled. Each kit has 11 pages. Host materials have 9 pages. Cut only the dashed outlines. All clue colour names are also written in words.",
  "paper_size": "Paper size",
  "us_letter": "US Letter",
  "host_materials_secret": "Host materials (secret)",
  "print_selected_pages": "Print selected pages",
  "select_at_least_one_kit_or_the_host_materials": "Select at least one kit or the host materials.",
  "return_to_the_workshop": "Return to the workshop",
  "the_expected_result_did_not_match": "The expected result did not match.",
  "pass": "Pass",
  "the_results_differ": "The results differ.",
  "config_is_valid_in_plain_words": "CONFIG is valid in plain words",
  "puzzle_derive_answer_from_prop_facts": "Puzzle {0}: derive {1} answer from prop facts",
  "cipher_mapping_is_a_bijection_every_character_ha": "Cipher mapping is a bijection; every character has one decoding",
  "tree_ribbon_is_one_directed_path_without_forks_o": "Tree ribbon is one directed path, without forks or loops",
  "torn_letter_eight_pieces_unique_join_profiles_tw": "Torn letter: eight pieces, unique join profiles, two columns × four rows",
  "symbol_shelf_has_exactly_one_valid_one_square_re": "Symbol shelf has exactly one valid one-square repair",
  "only_three_gift_tags_satisfy_both_conditions": "Only three gift tags satisfy both conditions",
  "z_fold_rails_coincide_after_two_folds_all_five_l": "Z-fold rails coincide and incomplete marks form five whole letters",
  "inventory_seals_exist_exactly_once_and_no_decora": "Inventory seals exist exactly once, and no decoration is a named seal",
  "envelope_graph_has_no_gaps_or_loops_each_is_open": "Envelope graph has no gaps or loops; each is opened by one lock",
  "meta_route_uses_all_seven_earlier_gears_exactly_": "Meta route uses all seven earlier gears exactly once",
  "every_prop_has_one_declared_answer_all_eight_nor": "Every prop has one declared answer; all eight normalised answers differ",
  "print_model_facts_equal_all_console_puzzle_facts": "Print model facts equal all console puzzle facts",
  "printable_kit_has_all_eleven_props_no_hidden_env": "Printable kit has all eleven props; no hidden envelope is omitted",
  "timer_derives_active_elapsed_time_from_the_suppl": "Timer derives active elapsed time from the supplied wall clock",
  "pause_freezes_timer_and_keypad_cooldown": "Pause freezes timer and keypad cooldown",
  "sleep_reload_counts_time_from_saved_anchor_witho": "Sleep/reload counts time from saved anchor, without ticking counters",
  "one_hint_adds_configured_minutes_to_score_never_": "One hint adds configured minutes to score, never shared elapsed time",
  "hint_ladder_stops_at_three_and_never_charges_a_f": "Hint ladder stops at three and never charges a fourth step",
  "wrong_code_counts_once_and_a_second_try_is_block": "Wrong code counts once and a second try is blocked for ten seconds",
  "answers_ignore_accents_case_and_spaces": "Answers ignore accents, case and spaces",
  "l_n_t_r_n": " Là n té R n ",
  "a_team_can_open_all_eight_locks_only_in_order": "A team can open all eight locks only in order",
  "ranking_includes_hint_penalty_with_true_shared_p": "Ranking includes hint penalty, with true shared places for ties",
  "undo_then_redo_restores_the_identical_state_incl": "Undo then redo restores the identical state (including clock anchor)",
  "timeout_offers_notes_one_at_a_time_then_celebrat": "Timeout offers notes one at a time, then celebrates everyone",
  "three_independent_lanes_keep_attempts_hints_and_": "Three independent lanes keep attempts, hints and locks separate",
  "invalid_actions_never_mutate_their_input_state": "Invalid actions never mutate their input state",
  "time_adjustments_and_timer_boundary_are_exact": "Time adjustments and timer boundary are exact",
  "rehearsal_selftest_cover_tour_never_write_a_real": "Rehearsal / selftest / cover / tour never write a real game",
  "correct_singular_and_plural_hints_and_tries": "Correct singular and plural hints and tries",
  "1_hint": "1 hint",
  "2_hints": "2 hints",
  "1_try": "1 try",
  "2_tries": "2 tries",
  "in_memory_checks_no_saved_game_access": "IN-MEMORY CHECKS • NO SAVED GAME ACCESS",
  "self_test": "{0} · Self-test",
  "checks_passed": "{0}/{1} checks passed",
  "check": "Check",
  "result": "Result",
  "copperfinches_a_little_rethink_1_try_let_the_loc": "Copperfinches: a little rethink. 1 try. Let the lock rest for 10 seconds.",
  "copperfinches_hint_1": "Copperfinches · Hint 1: ",
  "guided_tour_click_or_press_any_key_to_exit": "GUIDED TOUR · CLICK OR PRESS ANY KEY TO EXIT",
  "tour_ended_your_saved_game_was_not_opened_or_cha": "Tour ended. Your saved game was not opened or changed. Return to index.html without ?tour=1 to resume it.",
  "private_host_desk_2": "Private host desk · ",
  "please_correct_config_before_playing": "Please correct CONFIG before playing: ",
  "your_saved_evening_is_safe": "Your saved evening is safe",
  "export_damaged_save": "Export damaged save",
  "start_a_fresh_round": "Start a fresh round",
  "prefers_reduced_motion_reduce": "(prefers-reduced-motion: reduce)"
},
 // Illustrated scene and stylesheet colours; keys are referenced by CSS variables.
 colors:{
  "c001": "#41382c",
  "c002": "#f5d78a",
  "c003": "#ffdf91",
  "c004": "#d9a758",
  "c005": "#482c23",
  "c006": "#af7645",
  "c007": "#f6e2b1",
  "c008": "#7e9caa",
  "c009": "#bbc6c0",
  "c010": "#3d2923",
  "c011": "#b5844d",
  "c012": "#b07947",
  "c013": "#67564b",
  "c014": "#efede0",
  "c015": "#ffd58c",
  "c016": "#fff6db",
  "c017": "#4e3d2d",
  "c018": "#242c26",
  "c019": "#a2693d",
  "c020": "#734629",
  "c021": "#35271f",
  "c022": "#fff0bb",
  "c023": "#e3b564",
  "c024": "#9d692f",
  "c025": "#f4d18c",
  "c026": "#142943",
  "c027": "#416273",
  "c028": "#ffe3a0",
  "c029": "#fbc66c",
  "c030": "#fff1cf",
  "c031": "#e5ca92",
  "c032": "#aa793d",
  "c033": "#0c1410",
  "c034": "#dfb57b",
  "c035": "#2e251e",
  "c036": "#bb8850",
  "c037": "#bc8250",
  "c038": "#c19152",
  "c039": "#254539",
  "c040": "#c3985c",
  "c041": "#734b30",
  "c042": "#d1a462",
  "c043": "#342b21",
  "c044": "#8f683a",
  "c045": "#394332",
  "c046": "#152a25",
  "c047": "#b58c51",
  "c048": "#f3cb77",
  "c049": "#bb874e",
  "c050": "#d6b276",
  "c051": "#be7950",
  "c052": "#e0a67b",
  "c053": "#eee0b9",
  "c054": "#302c23",
  "c055": "#ba8651",
  "c056": "#b9814d",
  "c057": "#e4bd82",
  "c058": "#2c3025",
  "c059": "#362e26",
  "c060": "#ac3342",
  "c061": "#9e3d3f",
  "c062": "#2e6753",
  "c063": "#d7b279",
  "c064": "#ebc582",
  "c065": "#3b3025",
  "c066": "#d9ae6e",
  "c067": "#9d3745",
  "c068": "#edca89",
  "c069": "#f0d9a3",
  "c070": "#dcc498",
  "c071": "#d1a26b",
  "c072": "#15261f",
  "c073": "#ad8445",
  "c074": "#ebc581",
  "c075": "#4d816b",
  "c076": "#e0bd76",
  "c077": "#273d32",
  "c078": "#654c31",
  "c079": "#a33e4b",
  "c080": "#f3dba9",
  "c081": "#d6af69",
  "c082": "#e5c27d",
  "c083": "#73522c",
  "c084": "#983a45",
  "c085": "#ad4a50",
  "c086": "#ebc97f",
  "c087": "#e9c98b",
  "c088": "#3d7259",
  "c089": "#d8ba7d",
  "c090": "#173f30",
  "c091": "#416347",
  "c092": "#4b3926",
  "c093": "#bb8e4c",
  "c094": "#f3d79d",
  "c095": "#ffe8a4",
  "c096": "#ffe5a0",
  "c097": "#c39d63",
  "c098": "#983f48",
  "c099": "#c0655a",
  "c100": "#345d7c",
  "c101": "#285e47",
  "c102": "#805518",
  "c103": "#8e293f",
  "c104": "#80324f",
  "c105": "#fff2d5",
  "c106": "#26372e",
  "c107": "#f6e6bd",
  "c108": "#8d7046",
  "c109": "#b7995d",
  "c110": "#315d45",
  "c111": "#24412d",
  "c112": "#92663e",
  "c113": "#fff0c2",
  "c114": "#a33c46",
  "c115": "#f5cc6e",
  "c116": "#9a3347",
  "c117": "#366c43",
  "c118": "#d3a543",
  "c119": "#3a6f94",
  "c120": "#cf8198",
  "c121": "#fff9e4",
  "c122": "#f4d99a",
  "c123": "#fff9df",
  "c124": "#fff4d6",
  "c125": "#b89350",
  "c126": "#ba9b60",
  "c127": "#7b293a",
  "c128": "#6b604b",
  "c129": "#f5e8c5",
  "c130": "#957544",
  "c131": "#fff3d5",
  "c132": "#806f48",
  "c133": "#96354a",
  "c134": "#315b42",
  "c135": "#fff4d7",
  "c136": "#876a23",
  "c137": "#e7e4d7",
  "c138": "#67604a",
  "c139": "#816735",
  "c140": "#b3944f",
  "c141": "#946f33",
  "c142": "#123b32",
  "c143": "#8e263d",
  "c144": "#eac783",
  "c145": "#fff3d7",
  "c146": "#bda573",
  "c147": "#0e251f",
  "c148": "#b9a373",
  "c149": "#244e41",
  "c150": "#38634e",
  "c151": "#ffdf8a",
  "c152": "#efd397",
  "c153": "#e7c682",
  "c154": "#1e362a",
  "c155": "#fff0bf",
  "c156": "#846638",
  "c157": "#ffdda0",
  "c158": "#173c32",
  "c159": "#25493b",
  "c160": "#0d251f",
  "c161": "#8e805a",
  "c162": "#a98750",
  "c163": "#3a3329",
  "c164": "#0006",
  "c165": "#473a2c",
  "c166": "#182e26ee",
  "c167": "#182e26bb",
  "c168": "#102e28f5",
  "c169": "#0007",
  "c170": "#ac925f",
  "c171": "#214b3f",
  "c172": "#133329",
  "c173": "#0003",
  "c174": "#0e2d25",
  "c175": "#a59570",
  "c176": "#fff6e2",
  "c177": "#243d30",
  "c178": "#c9ae7b",
  "c179": "#e0c58e",
  "c180": "#0b241d",
  "c181": "#9c956e",
  "c182": "#315c49",
  "c183": "#062319",
  "c184": "#507961",
  "c185": "#173b2d",
  "c186": "#14362b",
  "c187": "#ffe1a4",
  "c188": "#ffe2a4",
  "c189": "#7b8060",
  "c190": "#153b30",
  "c191": "#28503d",
  "c192": "#a4ae9c",
  "c193": "#f8d68e",
  "c194": "#ffedcc",
  "c195": "#d8c696",
  "c196": "#fff1ce",
  "c197": "#29392d",
  "c198": "#b28b45",
  "c199": "#0009",
  "c200": "#081e19e8",
  "c201": "#163c30",
  "c202": "#efca85",
  "c203": "#0e2b25f5",
  "c204": "#0d261eaf",
  "c205": "#bda16c",
  "c206": "#123b32f5",
  "c207": "#204e3cb8",
  "c208": "#0a211be0",
  "c209": "#f7d491",
  "c210": "#f4ce80",
  "c211": "#f7d697",
  "c212": "#ede0be",
  "c213": "#254732",
  "c214": "#f1c76b",
  "c215": "#df8791",
  "c216": "#9ccbb1",
  "c217": "#b19460",
  "c218": "#173d31f7",
  "c219": "#122d26f7",
  "c220": "#8b7b55",
  "c221": "#c4c7b5",
  "c222": "#ffdc99",
  "c223": "#bea575",
  "c224": "#f1d6a4",
  "c225": "#e4c381",
  "c226": "#e8c27b",
  "c227": "#26392b",
  "c228": "#ffdda2",
  "c229": "#102d25",
  "c230": "#f1ce83",
  "c231": "#1e4335",
  "c232": "#8d9167",
  "c233": "#ffe1a1",
  "c234": "#d8d4b6",
  "c235": "#a5946a",
  "c236": "#59705b",
  "c237": "#284e3b",
  "c238": "#0b281b00",
  "c239": "#102d25eb",
  "c240": "#0008",
  "c241": "#ffe3aa",
  "c242": "#fff1d7",
  "c243": "#24392d",
  "c244": "#b99c5f",
  "c245": "#25372a",
  "c246": "#87966e",
  "c247": "#c2edaa",
  "c248": "#ffb6b0",
  "c249": "#f3e7ce",
  "c250": "#233c30",
  "c251": "#fff9eb",
  "c252": "#173f31",
  "c253": "#988258",
  "c254": "#e1c18a",
  "c255": "#183528",
  "c256": "#766d49",
  "c257": "#b69a61",
  "c258": "#786342",
  "c259": "#fff6d9",
  "c260": "#f1e8ce",
  "c261": "#b3a170",
  "c262": "#8c7147",
  "c263": "#8d7047",
  "c264": "#9b8455",
  "c265": "#b49247",
  "c266": "#f3d997",
  "c267": "#b58d48",
  "c268": "#f2e2b7",
  "c269": "#a38142",
  "c270": "#9e8147",
  "c271": "#b08947",
  "c272": "#aa8138",
  "c273": "#ac9461",
  "c274": "#edc782",
  "c275": "#e9d8af"
}
};
'use strict';
function copy(key,...values){return (CONFIG.copy[key]||key).replace(/\{(\d+)\}/g,(_,i)=>String(values[i]));}
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const clone=x=>JSON.parse(JSON.stringify(x));
const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/\s+/g,'');
const params=new URLSearchParams(location.search), IS_GM=params.has('gm'), TOUR=params.has('tour'), COVER=params.has('cover'), TEST=params.has('selftest');
const EPHEMERAL=TOUR||COVER||TEST||IS_GM, SAVE_KEY='clockwork-workshop-v1';
const root=$('#app'); let state, history=[], future=[], selected=0, entry=[], gmWindow=null, mirror=null, mirrorAt=0, mirrorFingerprint='', overlay=null, damaged=null, saveBlocked=false, wizardStep=0, rehearsalState=null, rehearsalDone=false, setupDraft=null, viewStamp='', lastBroadcast=0, introTimer=null, printReturn=null, tourActive=TOUR, tourStart=Date.now(), audio=null, muted=false, lastTheme=0, toastUntil=0;
const U=CONFIG.ui;
function el(tag,cls,txt){const n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n;}
function add(parent,...children){children.flat().forEach(c=>{if(c!==null&&c!==undefined)parent.append(typeof c==='string'?document.createTextNode(c):c)});return parent;}
function button(txt,fn,cls='',attrs={}){const n=el('button',cls,txt);n.type='button';Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));n.onclick=fn;return n;}
function labelInput(label,value,type='text',attrs={}){const wrap=el('label','field'),n=el('input');n.type=type;n.value=value;Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));add(wrap,el('span','',label),n);return wrap;}
function announce(txt){$('#announce').textContent=txt;}
function plural(n,word){return `${n} ${n===1?word:word==='try'?'tries':word+'s'}`;}
function fmt(ms){const s=Math.max(0,Math.ceil(ms/1000));return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
function seconds(ms){return Math.max(0,Math.ceil(ms/1000));}
function elapsed(s,now=Date.now()){return s.baseElapsed+(s.phase==='playing'&&!s.paused?Math.max(0,now-s.anchor):0);}
function remaining(s,now=Date.now()){return Math.max(0,s.durationMs+s.adjustMs-elapsed(s,now));}
function score(t){return t.finishMs===null?null:Math.ceil((t.finishMs+t.hintPenaltyMs)/1000)*1000;}
function rankings(s){return s.teams.map((t,i)=>({i,score:score(t)})).filter(t=>t.score!==null).sort((a,b)=>a.score-b.score).map((t,j,a)=>({...t,rank:1+a.filter(x=>x.score<t.score).length}));}
function makeState(opts={}){return {version:CONFIG.version,seed:CONFIG.seed,revision:0,phase:'setup',paused:false,baseElapsed:0,anchor:0,durationMs:(opts.duration||CONFIG.settings.duration)*60000,adjustMs:0,hintMinutes:opts.hintMinutes??CONFIG.settings.hintMinutes,cooldownSeconds:opts.cooldownSeconds??CONFIG.settings.cooldownSeconds,pin:opts.pin||CONFIG.settings.pin,teams:(opts.teams||CONFIG.teams.slice(0,2)).map(t=>({...t,players:t.players||4,lock:0,hints:0,hintPenaltyMs:0,hintLevels:Array(8).fill(0),tries:Array(8).fill(0),cooldownUntil:0,finishMs:null})),log:[],message:null,celebration:null,revealIndex:0,introAt:0};}
function validateConfig(){const e=[];if(CONFIG.settings.duration<CONFIG.settings.minDuration||CONFIG.settings.duration>CONFIG.settings.maxDuration)e.push(CONFIG.copy.default_duration_error);if(CONFIG.settings.hintMinutes<0||CONFIG.settings.hintMinutes>10)e.push(CONFIG.copy.default_hint_error);if(Object.values(CONFIG.colors).some(color=>!CSS.supports('color',color)))e.push(CONFIG.copy.default_color_error);if(CONFIG.puzzles.length!==8)e.push(copy("there_must_be_seven_puzzles_and_one_final_puzzle"));if(!/^\d{4}$/.test(CONFIG.settings.pin))e.push(copy("the_host_pin_must_have_four_digits"));if(CONFIG.settings.cooldownSeconds<1)e.push(copy("the_lock_rest_must_be_at_least_one_second"));const env=CONFIG.puzzles.map(p=>p.envelope).filter(Boolean);if(new Set(env).size!==7||env.some((x,i)=>x!==i+1))e.push(copy("the_seven_envelopes_must_be_numbered_1_to_7_once"));CONFIG.puzzles.forEach((p,i)=>{if(p.id!==i+1||p.hints.length!==3||!p.answer)e.push(copy("puzzle_needs_a_number_an_answer_and_three_hints", i+1));try{if(norm(solve(p))!==norm(p.answer))e.push(copy("puzzle_the_printed_facts_do_not_produce_its_answ", i+1));}catch(x){e.push(copy("puzzle", i+1, x.message));}});return e;}
function validateState(s){if(!s||s.version!==CONFIG.version||s.seed!==CONFIG.seed)throw Error(copy("this_game_belongs_to_a_different_workshop_editio"));if(!['setup','intro','rules','playing','soClose','finished'].includes(s.phase))throw Error(copy("the_saved_screen_is_not_recognised"));if(!Number.isFinite(s.durationMs)||s.durationMs<CONFIG.settings.minDuration*60000||s.durationMs>CONFIG.settings.maxDuration*60000||!Number.isFinite(s.baseElapsed)||s.baseElapsed<0||!Number.isFinite(s.anchor)||!Number.isFinite(s.adjustMs)||s.durationMs+s.adjustMs<0)throw Error(copy("the_saved_time_is_damaged"));if(typeof s.paused!=='boolean'||!Number.isInteger(s.revision)||s.revision<0||!Number.isFinite(s.introAt))throw Error(CONFIG.copy.saved_controls_error);if(!Array.isArray(s.teams)||s.teams.length<1||s.teams.length>4)throw Error(copy("choose_one_to_four_teams"));if(!/^\d{4}$/.test(s.pin)||!Number.isFinite(s.hintMinutes)||s.hintMinutes<0||s.hintMinutes>10||!Number.isFinite(s.cooldownSeconds)||s.cooldownSeconds<1||s.cooldownSeconds>120)throw Error(copy("the_host_settings_are_damaged"));s.teams.forEach(t=>{if(typeof t.name!=='string'||t.name.length<1||t.name.length>28||!/^#[0-9a-f]{6}$/i.test(t.color)||!Number.isInteger(t.players)||t.players<2||t.players>6||!Number.isInteger(t.lock)||t.lock<0||t.lock>8||!Array.isArray(t.hintLevels)||t.hintLevels.length!==8||t.hintLevels.some(n=>!Number.isInteger(n)||n<0||n>3)||!Array.isArray(t.tries)||t.tries.length!==8||t.tries.some(n=>!Number.isInteger(n)||n<0)||!Number.isFinite(t.hints)||t.hints<0||!Number.isFinite(t.hintPenaltyMs)||t.hintPenaltyMs<0||!Number.isFinite(t.cooldownUntil)||!((t.finishMs===null&&t.lock<8)||(Number.isFinite(t.finishMs)&&t.finishMs>=0&&t.lock===8)))throw Error(copy("a_saved_team_record_is_damaged"));});if(!Array.isArray(s.log)||s.log.length>10000||!Number.isInteger(s.revealIndex)||s.revealIndex<0||s.revealIndex>8)throw Error(copy("the_saved_activity_log_is_damaged"));if(s.log.some(l=>!l||!Number.isFinite(l.at)||l.at<0||typeof l.kind!=='string'||typeof l.text!=='string'||l.text.length>1400))throw Error(CONFIG.copy.saved_log_error);if(s.celebration&&!(s.celebration.all===true||Number.isInteger(s.celebration.team)&&s.celebration.team>=0&&s.celebration.team<s.teams.length))throw Error(CONFIG.copy.saved_celebration_error);if(s.message&&(typeof s.message.text!=='string'||s.message.text.length>1200||!Number.isFinite(s.message.until)))throw Error(copy("a_saved_message_is_damaged"));return true;}
// Pure reducer: the caller supplies the clock. Errors are words, never partial writes.
function reduce(old,action,now){try{validateState(old);const s=clone(old),at=elapsed(s,now);let t=s.teams[action.team],p=t?CONFIG.puzzles[t.lock]:null;const log=(kind,text)=>s.log.push({at,kind,text});const running=()=>{if(s.phase!=='playing')throw Error(copy("start_the_clock_before_using_a_lock"));if(s.paused)throw Error(copy("the_workshop_is_paused_resume_before_using_a_loc"));if(at>=s.durationMs+s.adjustMs)throw Error(copy("the_time_has_ended_finish_together_with_elda_s_n"));};const team=()=>{if(!t)throw Error(copy("choose_a_team_first"));if(t.finishMs!==null)throw Error(copy("this_team_has_already_brought_the_clock_to_life"));};switch(action.type){
case 'INTRO':if(s.phase!=='setup')throw Error(copy("the_story_is_already_prepared"));s.phase='intro';s.introAt=now;break;
case 'RULES':if(s.phase!=='intro')throw Error(copy("the_story_must_come_first"));s.phase='rules';break;
case 'START':if(s.phase!=='rules')throw Error(copy("read_the_rules_before_starting"));s.phase='playing';s.anchor=now;log('start',copy("the_workshop_clock_started"));break;
case 'PAUSE':if(s.phase!=='playing')throw Error(copy("only_a_running_game_can_pause"));if(!s.paused){s.baseElapsed=at;s.paused=true;}else{s.anchor=now;s.paused=false;}log('pause',s.paused?copy("the_host_paused_the_workshop"):copy("the_host_resumed_the_workshop"));break;
case 'TIME':if(s.phase!=='playing')throw Error(copy("time_can_be_changed_while_a_game_is_running"));if(!Number.isFinite(action.minutes)||Math.abs(action.minutes)>90)throw Error(copy("add_or_remove_up_to_90_minutes_at_once"));s.adjustMs=Math.max(-s.durationMs,s.adjustMs+action.minutes*60000);log('time',copy("the_host_changed_the_time_by_minutes", action.minutes));break;
case 'ATTEMPT':running();team();if(at<t.cooldownUntil)throw Error(copy("let_the_lock_rest_for_seconds", seconds(t.cooldownUntil-at)));if(typeof action.code!=='string'||action.code.length>100)throw Error(copy("enter_a_short_code"));t.tries[t.lock]++;if(norm(action.code)===norm(p.answer)){open();}else{t.cooldownUntil=at+s.cooldownSeconds*1000;s.message={text:copy("a_little_rethink_let_the_lock_rest_for_seconds", t.name, plural(t.tries[t.lock],'try'), s.cooldownSeconds),until:at+CONFIG.timing.wrongMessageMs,kind:'wrong'};log('wrong',copy("lock_not_yet", t.name, p.id, action.code||'(empty)'));}break;
case 'HINT':running();team();if(t.hintLevels[t.lock]>=3)throw Error(copy("all_three_hints_for_this_lock_are_already_open"));{const level=t.hintLevels[t.lock]++;t.hints++;t.hintPenaltyMs+=s.hintMinutes*60000;s.message={text:copy("hint", t.name, level+1, p.hints[level]),until:at+CONFIG.timing.hintMessageMs,kind:'hint'};log('hint',copy("lock_hint", t.name, p.id, level+1));}break;
case 'MANUAL':running();team();log('host',copy("lock_opened_by_the_host", t.name, p.id));open();break;
case 'MESSAGE':if(typeof action.text!=='string'||!action.text.trim()||action.text.length>1200)throw Error(copy("write_a_message_of_1_to_1200_characters"));s.message={text:action.text.trim(),until:at+CONFIG.timing.hostMessageMs,kind:'host'};log('message',action.text.trim());break;
case 'DISMISS':s.message=null;s.celebration=null;break;
case 'CLEAR_MESSAGE':s.message=null;break;
case 'TIMEOUT':if(s.phase!=='playing'||at<s.durationMs+s.adjustMs)throw Error(copy("there_is_still_time_on_the_clock"));s.baseElapsed=at;s.phase='soClose';s.paused=true;s.message=null;s.celebration=null;log('ending',copy("elda_offered_to_finish_the_clock_together"));break;
case 'END':if(!['playing','rules','intro'].includes(s.phase))throw Error(copy("there_is_no_live_evening_to_end"));s.baseElapsed=at;s.phase='soClose';s.paused=true;s.message=null;s.celebration=null;log('ending',copy("the_host_invited_everyone_to_finish_together"));break;
case 'REVEAL':if(s.phase!=='soClose')throw Error(copy("elda_s_notes_open_after_the_time_ends"));if(s.revealIndex<remainingNotes(s).length)s.revealIndex++;else{s.phase='finished';s.celebration={all:true};}break;
default:throw Error(copy("that_workshop_action_is_not_recognised"));}
function open(){const id=t.lock;t.lock++;t.cooldownUntil=0;log('unlock',copy("lock_opened", t.name, id+1, id<7?` · Envelope ${id+1}`:''));s.message={text:`${t.name}: ${CONFIG.story.beats[id]}`,until:at+CONFIG.timing.unlockMessageMs,kind:'unlock'};if(t.lock===8){t.finishMs=at;s.celebration={team:action.team};if(s.teams.every(x=>x.finishMs!==null)){s.baseElapsed=at;s.paused=true;s.phase='finished';}}}
s.revision++;validateState(s);return {state:s};}catch(e){return {error:e.message};}}
function commit(action){if(IS_GM){sendCommand(action);return;}const active=state;const result=reduce(active,action,Date.now());if(result.error){notify(result.error);return false;}history.push(clone(active));if(history.length>100)history.shift();future=[];state=result.state;if(action.type==='INTRO')rehearsalState=null;if(action.type==='ATTEMPT'){sound(state.log.at(-1)?.kind==='wrong'?'wrong':'unlock');entry=[];}if(action.type==='PAUSE'){if(state.paused)audio?.suspend();else if(!muted)audio?.resume();}if(action.type==='HINT')sound('hint');if(action.type==='MANUAL')sound('unlock');if(state.celebration&&!active.celebration)sound('final');save();render();broadcast();if(state.message)announce(state.message.text);return true;}
function travel(direction){const source=direction==='undo'?history:future,target=direction==='undo'?future:history;if(!source.length){notify(copy("nothing_to", direction));return;}target.push(clone(state));state=source.pop();entry=[];save();render();broadcast();}
function save(){if(EPHEMERAL||saveBlocked)return;try{localStorage.setItem(SAVE_KEY,JSON.stringify({state,history,future}));}catch(e){notify(copy("the_browser_could_not_save_this_game_use_export_"));}}
function load(){try{const raw=localStorage.getItem(SAVE_KEY);if(!raw)return null;const obj=JSON.parse(raw);validateState(obj.state);if(!Array.isArray(obj.history)||!Array.isArray(obj.future))throw Error(copy("the_undo_history_is_damaged"));obj.history.forEach(validateState);obj.future.forEach(validateState);history=obj.history;future=obj.future;return obj.state;}catch(e){try{damaged=localStorage.getItem(SAVE_KEY)||'';}catch(x){damaged='';}saveBlocked=true;return null;}}
function download(name,text,type='application/json'){const a=el('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
function exportGame(){download('clockwork-game.json',JSON.stringify({state,history,future},null,2));}
function importGame(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const x=JSON.parse(reader.result);validateState(x.state);if(!Array.isArray(x.history)||!Array.isArray(x.future)||x.history.length>100||x.future.length>100)throw Error(copy("the_game_history_is_damaged"));x.history.forEach(validateState);x.future.forEach(validateState);state=x.state;selected=0;entry=[];history=x.history;future=x.future;saveBlocked=false;damaged=null;save();overlay=null;render();broadcast();}catch(e){notify(copy("import_kept_your_current_game_safe", e.message));}};reader.readAsText(file);}
function notify(text){announce(text);let n=$('#notice');if(!n){n=el('div','notice');n.id='notice';n.setAttribute('role','alert');document.body.append(n);}n.textContent=text;toastUntil=Date.now()+CONFIG.timing.noticeMs;}
function letterPieces(p){const d=p.prop;const pieces=[];for(let r=0;r<4;r++)for(let c=0;c<2;c++)pieces.push({text:d.rows[r][c],arrow:c===1?d.rows[r][2]:null,top:r===0?0:-d.edges[4+(r-1)*2+c],bottom:r===3?0:d.edges[4+r*2+c],left:c===0?0:-d.edges[r],right:c===1?0:d.edges[r]});return [5,0,7,2,6,1,4,3].map(i=>pieces[i]);}
function fitLetter(p){const pieces=letterPieces(p),solutions=[];function search(board,remaining){if(solutions.length>1)return;if(!remaining.length){solutions.push(board);return;}const pos=board.length,r=Math.floor(pos/2),c=pos%2;remaining.forEach((piece,i)=>{if((r===0?piece.top!==0:piece.top!==-board[pos-2].bottom)||(r===3&&piece.bottom!==0)||(c===0?piece.left!==0:piece.left!==-board[pos-1].right)||(c===1&&piece.right!==0))return;search([...board,piece],remaining.filter((_,j)=>j!==i));});}search([],pieces);return solutions;}
function solve(p){const d=p.prop;switch(p.id){case 1:return [...d.cipher].map(c=>d.alphabet[(d.alphabet.indexOf(c)-d.shift+26)%26]).join('');case 2:{let node=d.start,out=[],seen=new Set();while(node!==d.end){if(seen.has(node))throw Error(copy("the_ribbon_loops"));seen.add(node);const next=d.links.filter(l=>l[0]===node);if(next.length!==1)throw Error(copy("the_ribbon_must_have_exactly_one_onward_path"));node=next[0][1];const o=d.ornaments.find(o=>o.id===node);if(o)out.push(d.key[o.color]);}return out.join('');}case 3:{const fits=fitLetter(p);if(fits.length!==1)throw Error(CONFIG.copy.letter_fit_error);return fits[0].filter(piece=>piece.arrow).map(piece=>piece.arrow).join(' ');}case 4:{let candidates=[];d.grid.forEach((r,i)=>r.forEach((v,j)=>d.symbols.filter(x=>x!==v).forEach(x=>{const g=clone(d.grid);g[i][j]=x;const good=g.every(r=>new Set(r).size===4)&&g[0].every((_,c)=>new Set(g.map(r=>r[c])).size===4);if(good)candidates.push(x);})));if(candidates.length!==1)throw Error(copy("the_shelf_must_have_exactly_one_repair"));return candidates[0];}case 5:return String(d.tags.filter(t=>t.ribbon==='RED'&&t.stars===2).reduce((s,t)=>s+t.value,0));case 6:return d.fragments.map(fragment=>{const rows=fragment.left.map((row,i)=>row+fragment.right[i]),matches=Object.entries(d.glyphs).filter(([,glyph])=>JSON.stringify(glyph)===JSON.stringify(rows));if(matches.length!==1)throw Error(copy('the_letter_halves_do_not_join'));return matches[0][0];}).join('');case 7:{const seals=CONFIG.puzzles.filter(x=>d.sourceIds.includes(x.id)).map(x=>x.prop.seal);return d.order.map(n=>{const a=seals.filter(x=>x.name===n);if(a.length!==1)throw Error(copy("each_inventory_name_needs_exactly_one_seal"));return a[0].color;}).join(' ');}case 8:return d.route.map(n=>CONFIG.puzzles.slice(0,7).find(x=>x.gear.name===n).gear.letter).join('');}}
// Original vector set: the workshop is painted from geometric shapes, not assets.
function sceneSVG(progress=0){const teeth=(x,y,r,n=12)=>Array.from({length:n},(_,i)=>`<rect x="${x-5}" y="${y-r-7}" width="10" height="16" rx="2" transform="rotate(${i*360/n} ${x} ${y})"/>`).join('');const gear=(x,y,r,i)=>`<g opacity=".16" class="gear g${i} ${progress>i?'awake':''}" style="transform-origin:${x}px ${y}px"><g fill="url(#brass)">${teeth(x,y,r)}<circle cx="${x}" cy="${y}" r="${r}"/></g><circle cx="${x}" cy="${y}" r="${r*.56}" fill="${CONFIG.colors.c001}" stroke="${CONFIG.colors.c002}" stroke-width="2"/><circle cx="${x}" cy="${y}" r="6" fill="${CONFIG.colors.c003}"/>${[0,60,120].map(a=>`<path d="M${x-r*.7} ${y}h${r*1.4}" stroke="${CONFIG.colors.c004}" stroke-width="5" transform="rotate(${a} ${x} ${y})"/>`).join('')}</g>`;const windowScene=(x)=>`<g transform="translate(${x} 120)"><rect x="-14" y="-14" width="237" height="330" rx="100" fill="${CONFIG.colors.c005}" stroke="${CONFIG.colors.c006}" stroke-width="6"/><path d="M0 310V92a104 104 0 0 1 208 0v218Z" fill="url(#night)"/><circle cx="156" cy="57" r="24" fill="${CONFIG.colors.c007}" opacity=".88"/><path d="M0 238Q50 208 104 230T208 220V310H0Z" fill="${CONFIG.colors.c008}"/><path d="M0 264Q65 235 130 261T208 252V310H0Z" fill="${CONFIG.colors.c009}"/>${[20,83,151].map((a,i)=>`<g transform="translate(${a} ${218+i%2*24})"><path d="M-14 18L18-10L48 18V65H-14" fill="${CONFIG.colors.c013}"/><path d="M-20 20L18-17L55 20" fill="none" stroke="${CONFIG.colors.c014}" stroke-width="9"/><rect x="4" y="29" width="12" height="16" fill="${CONFIG.colors.c015}"/><rect x="25" y="29" width="12" height="16" fill="${CONFIG.colors.c015}"/></g>`).join('')}<g class="snowflakes">${Array.from({length:24},(_,i)=>`<circle cx="${(i*43)%202+3}" cy="${(i*71)%280+12}" r="${1.6+i%3}" fill="${CONFIG.colors.c016}" opacity=".75"/>`).join('')}</g><path d="M104-10V312M0 122H208M0 221H208" stroke="${CONFIG.colors.c010}" stroke-width="10"/><path d="M104-10V312" stroke="${CONFIG.colors.c011}" stroke-width="2"/><rect x="-20" y="308" width="247" height="18" rx="6" fill="${CONFIG.colors.c012}"/></g>`;
return `<svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${CONFIG.ui.sceneAlt}"><defs><linearGradient id="wall" x2="0" y2="1"><stop stop-color="${CONFIG.colors.c017}"/><stop offset="1" stop-color="${CONFIG.colors.c018}"/></linearGradient><linearGradient id="wood" x2="0" y2="1"><stop stop-color="${CONFIG.colors.c019}"/><stop offset=".18" stop-color="${CONFIG.colors.c020}"/><stop offset="1" stop-color="${CONFIG.colors.c021}"/></linearGradient><linearGradient id="brass" x2="1" y2="1"><stop stop-color="${CONFIG.colors.c022}"/><stop offset=".35" stop-color="${CONFIG.colors.c023}"/><stop offset=".65" stop-color="${CONFIG.colors.c024}"/><stop offset="1" stop-color="${CONFIG.colors.c025}"/></linearGradient><linearGradient id="night" x2="0" y2="1"><stop stop-color="${CONFIG.colors.c026}"/><stop offset="1" stop-color="${CONFIG.colors.c027}"/></linearGradient><radialGradient id="light"><stop stop-color="${CONFIG.colors.c028}" stop-opacity=".48"/><stop offset="1" stop-color="${CONFIG.colors.c029}" stop-opacity="0"/></radialGradient><radialGradient id="dial"><stop stop-color="${CONFIG.colors.c030}"/><stop offset=".8" stop-color="${CONFIG.colors.c031}"/><stop offset="1" stop-color="${CONFIG.colors.c032}"/></radialGradient><filter id="shadow"><feDropShadow dx="0" dy="9" stdDeviation="8" flood-color="${CONFIG.colors.c033}" flood-opacity=".6"/></filter><filter id="paper"><feTurbulence baseFrequency=".6" numOctaves="2" seed="21" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".045"/></feComponentTransfer><feBlend in="SourceGraphic" mode="soft-light"/></filter></defs>
<rect width="1400" height="820" fill="url(#wall)"/><g opacity=".23" stroke="${CONFIG.colors.c034}">${Array.from({length:18},(_,i)=>`<path d="M${i*84} 0V770"/>`).join('')}</g><path d="M0 45H1400M42 0V820M1358 0V820" stroke="${CONFIG.colors.c035}" stroke-width="34"/><path d="M0 57H1400" stroke="${CONFIG.colors.c036}" stroke-width="3"/>${windowScene(91)}${windowScene(1100)}
<path d="M0 715L1400 710V820H0" fill="url(#wood)"/><path d="M0 739H1400M0 780H1400" stroke="${CONFIG.colors.c037}" stroke-opacity=".28" stroke-width="2"/>
<g><path d="M555 700V256Q555 154 700 101Q845 154 845 256V700Z" fill="url(#wood)" stroke="${CONFIG.colors.c038}" stroke-width="9"/><path d="M584 690V269Q584 177 700 140Q816 177 816 269V690" fill="${CONFIG.colors.c039}" stroke="${CONFIG.colors.c040}" stroke-width="3"/><path d="M540 695H860L877 724H523Z" fill="url(#brass)"/><path d="M560 715H840V753H560Z" fill="${CONFIG.colors.c041}" stroke="${CONFIG.colors.c042}" stroke-width="4"/><path d="M684 143L700 118L716 143L700 155Z" fill="url(#brass)"/>
<circle cx="700" cy="302" r="132" fill="${CONFIG.colors.c043}" stroke="url(#brass)" stroke-width="16"/><circle cx="700" cy="302" r="116" fill="url(#dial)" stroke="${CONFIG.colors.c044}" stroke-width="3"/>${Array.from({length:60},(_,i)=>{let a=i*Math.PI/30,r=i%5?106:99;return `<path d="M${700+Math.sin(a)*r} ${302-Math.cos(a)*r}L${700+Math.sin(a)*112} ${302-Math.cos(a)*112}" stroke="${CONFIG.colors.c092}" stroke-width="${i%5?1.3:4}"/>`;}).join('')}<g stroke="${CONFIG.colors.c045}" stroke-linecap="round"><path opacity="${progress===8?0:1}" class="clock-hand ${progress===8?'awake':''}" d="M700 302V229" stroke-width="7" style="transform-origin:700px 302px;transform:rotate(${progress*40-30}deg)"/><path d="M700 302L750 327" opacity="${progress===8?0:1}" stroke-width="8"/></g><circle cx="700" cy="302" r="11" fill="url(#brass)"/>
<rect x="607" y="461" width="186" height="193" rx="82" fill="${CONFIG.colors.c046}" stroke="${CONFIG.colors.c047}" stroke-width="5"/>${CONFIG.scene.gears.map((v,i)=>gear(...v,i)).join('')}<circle cx="700" cy="416" r="7" fill="${CONFIG.colors.c048}"/>
</g>
<g filter="url(#shadow)"><path d="M354 277H524V302H354ZM357 479H528V502H357ZM882 285H1057V309H882ZM883 481H1057V504H883" fill="url(#wood)" stroke="${CONFIG.colors.c049}" stroke-width="3"/>
<g transform="translate(414 236)"><path d="M-41 32Q0 58 45 29" fill="none" stroke="${CONFIG.colors.c050}" stroke-width="7"/><path d="M-22 22V-2L-5-27L13-18L10-2L31 5L26 24Z" fill="${CONFIG.colors.c051}" stroke="${CONFIG.colors.c052}" stroke-width="2"/><path d="M-10 2Q-3-12 14-10" stroke="${CONFIG.colors.c053}" stroke-width="9"/><circle cx="5" cy="-18" r="3" fill="${CONFIG.colors.c054}"/></g>
<g transform="translate(473 449)"><circle cx="0" cy="-29" r="25" fill="${CONFIG.colors.c055}"/><circle cx="-20" cy="-49" r="12" fill="${CONFIG.colors.c055}"/><circle cx="20" cy="-49" r="12" fill="${CONFIG.colors.c055}"/><ellipse cy="9" rx="27" ry="34" fill="${CONFIG.colors.c056}"/><ellipse cy="12" rx="17" ry="23" fill="${CONFIG.colors.c057}"/><circle cx="-9" cy="-33" r="3" fill="${CONFIG.colors.c058}"/><circle cx="9" cy="-33" r="3" fill="${CONFIG.colors.c058}"/><ellipse cy="-22" rx="11" ry="8" fill="${CONFIG.colors.c057}"/><circle cy="-25" r="4" fill="${CONFIG.colors.c059}"/><path d="M-26-8L26-8" stroke="${CONFIG.colors.c060}" stroke-width="8"/></g>
<g transform="translate(941 260)"><rect x="-35" y="-23" width="79" height="33" rx="5" fill="${CONFIG.colors.c061}"/><rect x="-14" y="-51" width="35" height="30" rx="3" fill="${CONFIG.colors.c062}"/><rect x="0" y="-67" width="10" height="17" fill="${CONFIG.colors.c063}"/><path d="M-35-14H44" stroke="${CONFIG.colors.c064}" stroke-width="3"/><circle cx="-19" cy="14" r="11" fill="${CONFIG.colors.c065}" stroke="${CONFIG.colors.c066}" stroke-width="4"/><circle cx="25" cy="14" r="11" fill="${CONFIG.colors.c065}" stroke="${CONFIG.colors.c066}" stroke-width="4"/></g>
<g transform="translate(966 436)"><ellipse rx="51" ry="31" fill="${CONFIG.colors.c067}" stroke="${CONFIG.colors.c068}" stroke-width="4"/><path d="M-46-16L-17 24L10-26L37 22" fill="none" stroke="${CONFIG.colors.c069}" stroke-width="5"/><ellipse cy="-13" rx="51" ry="17" fill="${CONFIG.colors.c070}" stroke="${CONFIG.colors.c068}" stroke-width="3"/><path d="M-25-37L24-4M27-41L-24-5" stroke="${CONFIG.colors.c071}" stroke-width="5" stroke-linecap="round"/></g></g>
<g class="${progress===8?'helper-awake':''}" style="transform-origin:359px 690px" transform="translate(359 644)" filter="url(#shadow)"><ellipse cy="57" rx="65" ry="14" fill="${CONFIG.colors.c072}" opacity=".5"/><path d="M-25 25L-38 54H-12L0 26M22 25L39 49H14L1 25" fill="${CONFIG.colors.c073}" stroke="${CONFIG.colors.c074}" stroke-width="4"/><rect x="-33" y="-34" width="65" height="62" rx="17" fill="${CONFIG.colors.c075}" stroke="${CONFIG.colors.c076}" stroke-width="5"/><circle cy="-62" r="32" fill="url(#brass)"/><circle cx="-12" cy="-65" r="5" fill="${CONFIG.colors.c077}"/><circle cx="12" cy="-65" r="5" fill="${CONFIG.colors.c077}"/><path d="M-9-50Q0-44 10-50" fill="none" stroke="${CONFIG.colors.c078}" stroke-width="3"/><path d="M-37-72Q0-121 36-72Z" fill="${CONFIG.colors.c079}"/><circle cy="-113" r="8" fill="${CONFIG.colors.c080}"/><path d="M-37-15L-66-43M38-15L58-49" stroke="${CONFIG.colors.c081}" stroke-width="14" stroke-linecap="round"/><path d="M51-50L68-50M61-60V-40" stroke="${CONFIG.colors.c082}" stroke-width="5"/><circle cy="-4" r="13" fill="url(#brass)"/><path d="M-7-4H7" stroke="${CONFIG.colors.c083}" stroke-width="3"/></g>
<g transform="translate(1043 647)" filter="url(#shadow)"><rect x="-45" y="-23" width="97" height="73" rx="5" fill="${CONFIG.colors.c084}"/><rect x="-49" y="-25" width="105" height="16" rx="3" fill="${CONFIG.colors.c085}"/><path d="M-5-25V50M-45 17H52" stroke="${CONFIG.colors.c086}" stroke-width="12"/><path d="M0-27Q-57-60-37-74Q-8-84 0-27Q16-85 42-72Q61-49 0-27Z" fill="none" stroke="${CONFIG.colors.c087}" stroke-width="8"/><rect x="60" y="8" width="72" height="45" rx="4" fill="${CONFIG.colors.c088}"/><path d="M92 8V53M60 26H132" stroke="${CONFIG.colors.c089}" stroke-width="7"/></g>
<g class="candles">${[122,1262].map((x,i)=>`<g transform="translate(${x} 664)"><ellipse cy="42" rx="40" ry="10" fill="${CONFIG.colors.c093}"/><rect x="-12" y="-67" width="24" height="106" rx="5" fill="${CONFIG.colors.c094}"/><path class="flame" d="M0-112Q24-79 0-67Q-18-81 0-112Z" fill="${CONFIG.colors.c095}"/><ellipse cy="-80" rx="140" ry="180" fill="url(#light)"/></g>`).join('')}</g>
<path d="M0 83Q140 146 280 82T560 82T840 82T1120 82T1400 82" fill="none" stroke="${CONFIG.colors.c090}" stroke-width="40"/><path d="M0 78Q140 140 280 78T560 78T840 78T1120 78T1400 78" fill="none" stroke="${CONFIG.colors.c091}" stroke-width="20" stroke-dasharray="5 15"/>${Array.from({length:25},(_,i)=>`<circle cx="${i*58}" cy="${82+25*Math.sin(i*.64)}" r="5" fill="${progress>0?CONFIG.colors.c096:CONFIG.colors.c097}"/>`).join('')}${[280,700,1120].map(x=>`<path d="M${x} 88q-57-49-55-8q1 26 55 8q57-49 55-8q-1 26-55 8l-24 49l25-10l22 13Z" fill="${CONFIG.colors.c098}" stroke="${CONFIG.colors.c099}" stroke-width="2"/>`).join('')}
<ellipse cx="700" cy="415" rx="630" ry="470" fill="url(#light)" opacity="${.28+progress*.055}"/>
</svg>`;}
function sceneNode(progress=0){const w=el('div','scene-art');w.dataset.progress=progress;w.append(new DOMParser().parseFromString(sceneSVG(progress),'image/svg+xml').documentElement);const c=el('canvas','workshop-dust');c.setAttribute('aria-hidden','true');w.append(c);return w;}
function brand(compact=false){const n=el('div','brand');add(n,el('span','eyebrow',copy("a_christmas_eve_adventure")),el(compact?'h2':'h1','',CONFIG.title));return n;}
function header(s){const h=el('header','console-header');add(h,brand(true));const time=el('div','timer');add(time,el('span','eyebrow',U.timeLabel),el('strong','time-value',fmt(remaining(s))));time.setAttribute('role','timer');time.setAttribute('aria-label',copy("time_left", fmt(remaining(s))));add(h,time);const tools=el('div','header-tools');add(tools,button(muted?U.muted:U.sound,toggleMute,'quiet',{title:'M'}),button(U.gm,openPin,'quiet',{title:copy("host_controls")}));add(h,tools);return h;}
function finishedTogether(s){return s.phase==='finished'&&s.teams.some(t=>t.finishMs===null);}
function progress(s){return finishedTogether(s)?8:Math.max(0,...s.teams.map(t=>t.lock));}
function laneStatus(s,t){return finishedTogether(s)&&t.finishMs===null?copy('finished_together_lane',plural(t.hints,'hint')):copy('8_locks',t.lock,plural(t.hints,'hint'),t.finishMs===null?fmt(elapsed(s)):fmt(score(t)));}
function lanes(s){const n=el('section','lanes');n.setAttribute('aria-label',copy("team_progress"));s.teams.forEach((t,i)=>{const b=button('',()=>{selected=i;entry=[];render();},'lane'+(selected===i?copy("selected"):''),{'aria-label':finishedTogether(s)&&t.finishMs===null?t.name+' · '+laneStatus(s,t):copy("locks_opened", t.name, t.lock, plural(t.hints,'hint'))});b.style.setProperty('--team',t.color);add(b,el('strong','',t.name));const gears=el('span','lane-gears');for(let j=0;j<8;j++)add(gears,el('span',j<t.lock||finishedTogether(s)?'filled':'',j===7?'◆':'⚙'));add(b,gears,el('span','lane-stats',laneStatus(s,t)));n.append(b);});return n;}
function keypad(s){const t=s.teams[selected]||s.teams[0],p=CONFIG.puzzles[t.lock],n=el('section','key-panel');n.setAttribute('aria-label',copy("code_entry"));if(!p){add(n,el('span','eyebrow',copy("all_eight_locks_open")),el('h2','',U.escape),el('p','',copy("including", t.name, fmt(score(t)), plural(t.hints,'hint'))),button(copy("view_celebration"),()=>{state.celebration={team:selected};render();},'primary'));return n;}
const teamBar=el('div','team-choice');add(teamBar,el('label','',U.teamShort));const select=el('select');select.setAttribute('aria-label',U.team);s.teams.forEach((t,i)=>{const o=el('option','',t.name);o.value=i;select.append(o);});select.value=selected;select.onchange=()=>{selected=+select.value;entry=[];render();};add(teamBar,select);add(n,teamBar,el('span','eyebrow',copy("lock_of_8", p.id, p.type==='digits'?`${p.answer.length} DIGITS`:p.type==='word'?'WORD':p.type==='arrows'?'4 ARROWS':p.type==='colors'?'4 COLOURS':'1 SYMBOL')),el('h2','',p.title));
const display=el('input','code-display');display.id='entry';display.value=entry.join(p.type==='word'||p.type==='digits'?'':' ');display.placeholder=copy("type_or_tap");display.setAttribute('aria-label',U.code);display.autocomplete='off';display.spellcheck=false;display.maxLength=32;display.readOnly=!['word','digits'].includes(p.type);display.inputMode=p.type==='digits'?'numeric':'text';display.oninput=()=>{entry=[...display.value];};display.onkeydown=e=>{if(e.key===copy("enter")){e.preventDefault();submitCode();}if(p.type==='arrows'&&e.key.startsWith(copy("arrow"))){e.preventDefault();appendKey(e.key.slice(5).toUpperCase());}};add(n,display);let keys=p.type==='digits'?[...'1234567890']:p.type==='arrows'?['UP','RIGHT','DOWN','LEFT']:p.type==='colors'?['BLUE','GREEN','GOLD','RED','PINK','WHITE']:p.type==='symbols'?CONFIG.puzzles[3].prop.symbols:[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];const grid=el('div',copy("keys")+p.type);keys.forEach(k=>{const symbols={UP:'↑',DOWN:'↓',LEFT:'←',RIGHT:'→',STAR:'✦',MOON:'☾',BELL:'♧',KEY:'⚿'};let text=p.type==='arrows'?symbols[k]:k;const b=button(text,()=>appendKey(k),p.type==='colors'?'color-key':'',{'aria-label':k});if(p.type==='colors')b.style.setProperty('--swatch',({BLUE:CONFIG.colors.c100,GREEN:CONFIG.colors.c101,GOLD:CONFIG.colors.c102,RED:CONFIG.colors.c103,PINK:CONFIG.colors.c104,WHITE:CONFIG.colors.c105})[k]);if(k==='WHITE')b.classList.add('light-key');if(p.type==='symbols'){const image=sv('svg',{viewBox:'0 0 40 40','aria-hidden':'true'});image.append(symbolIcon(k));b.replaceChildren(image,el('span','',k));}grid.append(b);});add(n,grid);const actions=el('div','key-actions');add(actions,button('⌫',()=>{entry.pop();updateEntry();},'quiet',{'aria-label':U.back}),button(U.clear,()=>{entry=[];updateEntry();},'quiet'),button(U.submit,submitCode,'primary',{id:'submit-code'}));add(n,actions);const status=el('div','lock-status');status.id='lock-status';add(n,status);add(n,button(`${U.hint} (${plural(s.hintMinutes,'minute')})`,askHint,'hint-button'));return n;}
function appendKey(k){if(!state||state.phase!=='playing'||state.paused){notify(copy("start_or_resume_the_clock_before_entering_a_code"));return;}const t=state.teams[selected];if(elapsed(state)<t.cooldownUntil)return;if(entry.length<32){entry.push(k);sound('key');updateEntry();}}
function updateEntry(){const n=$('#entry'),p=CONFIG.puzzles[state.teams[selected].lock];if(n)n.value=entry.join(p?.type==='word'||p?.type==='digits'?'':' ');}
function submitCode(){if(entry.length)commit({type:'ATTEMPT',team:selected,code:entry.join(' ')});else notify(copy("enter_a_code_first"));}
function askHint(){const t=state.teams[selected];if(t.lock>=8)return;showDialog(copy("a_little_help_from_elda"),U.hintConfirm.replace('{n}',plural(state.hintMinutes,'minute')),[[U.hint,()=>{overlay=null;commit({type:'HINT',team:selected});}],[copy("keep_thinking"),()=>{overlay=null;render();}]]);}
function renderConsole(s){const shell=el('main','console');add(shell,header(s));const area=el('div','play-area'),stage=el('section','workshop-stage');add(stage,sceneNode(progress(s)));const chapter=el('div','chapter');add(chapter,el('span','eyebrow',copy("christmas_eve", CONFIG.village.toUpperCase())),el('h2','',progress(s)===0?copy("the_clock_has_fallen_silent"):progress(s)===8?copy("a_workshop_full_of_wonder"):copy("found", plural(Math.min(7,progress(s)),'brass gear'))));add(stage,chapter);const message=el('div','scene-message');message.id='scene-message';message.setAttribute('role','status');add(stage,message);add(area,stage,keypad(s));add(shell,area,lanes(s));const foot=el('footer','console-footer');add(foot,el('span','',U.footer),CONFIG.settings.showCredit?el('span','footer-credit',CONFIG.settings.credit):null,button(U.openGM,openGM,'text-button'));add(shell,foot);root.append(shell);if(s.paused&&s.phase==='playing'){const pane=el('div','pause-overlay');add(pane,el('span','eyebrow','PAUSED'),el('h1','',U.paused),button(copy("host_controls"),openPin,'primary'));shell.append(pane);}if(s.celebration||s.phase==='finished')renderCelebration(s);if(s.phase==='soClose')renderSoClose(s);updateClock();}
function renderCelebration(s){const c=s.celebration||{all:true},t=Number.isInteger(c.team)?s.teams[c.team]:null;const pane=el('section','ending');pane.setAttribute('aria-label',copy("celebration"));const stars=el('div','confetti');for(let i=0;i<38;i++){const x=el('i');x.style.cssText=`--x:${(i*37)%100}%;--d:${i%9*.17}s;--r:${i*43}deg`;stars.append(x);}add(pane,stars,el('span','eyebrow',t?copy("a_little_christmas_miracle"):copy("wonder_makers_together")),el('div','ending-icon','✦'),el('h1','',U.escape),el('p','',CONFIG.story.finale));if(t)add(pane,el('strong','result-team',t.name),el('div','result-time',fmt(score(t))),el('p','',copy("play_time", fmt(t.finishMs), plural(t.hints,'hint'), plural(t.hintPenaltyMs/60000,'minute'))));const ranks=el('div','ranks');rankings(s).forEach(r=>add(ranks,el('p','',`${r.rank}. ${s.teams[r.i].name} · ${fmt(r.score)}`)));add(pane,ranks);if(s.phase==='playing')add(pane,button(U.keep,()=>commit({type:'DISMISS'}),'primary'));else add(pane,button(U.gm,openPin,'primary'),button(U.print,()=>openPrint(),'quiet'));root.append(pane);}
function remainingNotes(s){return CONFIG.puzzles.filter((p,i)=>s.teams.some(t=>t.finishMs===null&&t.lock<=i));}
function renderSoClose(s){const notes=remainingNotes(s);const pane=el('section',copy("ending_so_close"));add(pane,el('span','eyebrow',copy("the_last_delivery_can_wait_a_moment")),el('h1','',U.soClose),el('p','',CONFIG.story.soClose));if(s.revealIndex>0){const p=notes[s.revealIndex-1];add(pane,el('span','eyebrow',copy("elda_s_note_of_8", s.revealIndex, notes.length)),el('h2','',p.title),el('strong','revealed-answer',p.answer),el('p','',p.hints[1]),el('p','',p.envelope?copy("open_envelope_and_keep_its_brass_gear", p.envelope):copy("the_great_clock_is_ready_to_turn")));}else add(pane,el('p','',U.timeout));add(pane,button(s.revealIndex<notes.length?U.nextReveal:U.finish,()=>commit({type:'REVEAL'}),'primary'));root.append(pane);}
function updateClock(){if(overlay==='gm'&&$('.gm-time'))$('.gm-time').textContent=`${fmt(remaining(state))} · ${state.paused?copy("paused"):state.phase}`;if(!state||IS_GM||TEST||COVER)return;const n=$('.time-value');if(n&&n.textContent!==fmt(remaining(state)))n.textContent=fmt(remaining(state));const t=state.teams[selected],st=$('#lock-status');if(st&&t){const left=t.cooldownUntil-elapsed(state);const statusText=left>0?`${U.cooldown}: ${seconds(left)}s`:`${plural(t.tries[t.lock]||0,'try')} · ${plural(t.hints,'hint')}`;if(st.textContent!==statusText)st.textContent=statusText;$$(copy("keys_button_submit_code")).forEach(b=>{const disabled=left>0||state.paused||state.phase!=='playing';if(b.disabled!==disabled)b.disabled=disabled;});}const m=$('#scene-message');if(m){const show=!state.celebration&&state.phase!=='finished'&&state.message&&state.message.until>elapsed(state);m.hidden=!show;if(show&&m.dataset.text!==state.message.text){m.dataset.text=state.message.text;m.textContent=state.message.text;if(!$('button',m))m.append(button('×',()=>commit({type:'CLEAR_MESSAGE'}),'message-close',{'aria-label':copy("dismiss_message")}));}}$$('.lane-stats').forEach((n,i)=>{const t=state.teams[i];if(t){const text=laneStatus(state,t);if(n.textContent!==text)n.textContent=text;}});}
function renderIntro(){const s=state;const n=el('main','intro-screen');add(n,sceneNode(0));const content=el('div','intro-content');const idx=Math.min(3,Math.floor(Math.max(0,Date.now()-s.introAt)/(CONFIG.settings.introSeconds*1000/4)));add(content,el('span','eyebrow',copy("chapter_of_4", idx+1)),el('h1','',CONFIG.story.intro[idx][0]),el('p','intro-caption',CONFIG.story.intro[idx][1]),button(U.skip,()=>commit({type:'RULES'}),'quiet'));add(n,content);root.append(n);viewStamp=`intro${idx}`;}
function renderRules(){const n=el('main','rules-screen');add(n,sceneNode(0));const card=el('section','paper-card');add(card,el('span','eyebrow',copy("before_the_first_tick")),el('h1','',U.rules));CONFIG.story.rules.forEach((r,i)=>add(card,el('p','',`${i+1}. ${r}`)));add(card,el('p','',copy("wrong_codes_rest_for_seconds_each_hint_adds_to_y", state.cooldownSeconds, plural(state.hintMinutes,'minute'))),button(U.go,()=>commit({type:'START'}),'primary'));add(n,card);root.append(n);}
function renderSetup(){if(!setupDraft)setupDraft={teams:CONFIG.teams.slice(0,2).map(t=>({...t,players:4})),duration:CONFIG.settings.duration,hintMinutes:CONFIG.settings.hintMinutes,cooldownSeconds:CONFIG.settings.cooldownSeconds,pin:CONFIG.settings.pin};const shell=el('main','setup-screen');add(shell,sceneNode(0));const panel=el('section','setup-panel');add(panel,brand());const steps=el('nav','steps');U.setupSteps.forEach((v,i)=>add(steps,el('span',i===wizardStep?'active':'',`${i+1}. ${v}`)));add(panel,steps);const body=el('div','setup-body');if(wizardStep===0){add(body,el('h2','',U.ready),el('p','',U.prepIntro),el('p','',U.prepMaterials),el('blockquote','',CONFIG.story.letter.split('\n')[1]));}if(wizardStep===1){add(body,el('h2','',copy("gather_your_wonder_makers")));const count=labelInput(copy("number_of_teams_1_4"),setupDraft.teams.length,'number',{min:1,max:4});$('input',count).onchange=e=>{const c=Math.max(1,Math.min(4,Math.floor(+e.target.value||1)));setupDraft.teams=Array.from({length:c},(_,i)=>setupDraft.teams[i]||{...CONFIG.teams[i],players:4});render();};add(body,count);const teams=el('div','team-setup');setupDraft.teams.forEach((t,i)=>{const r=el('div','team-edit');const name=labelInput(copy("team_name", i+1),t.name,'text',{maxlength:28,required:'required'});$('input',name).oninput=e=>t.name=e.target.value.trim()||CONFIG.teams[i].name;const col=labelInput(copy("kit_colour"),t.color,'color');$('input',col).oninput=e=>t.color=e.target.value;const players=labelInput(copy("people_2_6"),t.players,'number',{min:2,max:6});$('input',players).onchange=e=>t.players=Math.max(2,Math.min(6,Math.floor(+e.target.value||2)));add(r,name,col,players);teams.append(r);});add(body,teams);const settings=el('div','settings-grid');[[copy("duration_30_90_minutes"),'duration',30,90],[copy("minutes_per_hint"),'hintMinutes',0,10],[copy("wrong_code_rest_seconds"),'cooldownSeconds',1,120]].forEach(([label,k,min,max])=>{const f=labelInput(label,setupDraft[k],'number',{min,max,step:1});$('input',f).onchange=e=>setupDraft[k]=Math.max(min,Math.min(max,Math.floor(+e.target.value||min)));settings.append(f);});const pin=labelInput(copy("host_pin_4_digits"),setupDraft.pin,'text',{inputmode:'numeric',pattern:'[0-9]{4}',maxlength:4});$('input',pin).onchange=e=>{if(/^\d{4}$/.test(e.target.value))setupDraft.pin=e.target.value;else{e.target.value=setupDraft.pin;notify(copy("the_host_pin_needs_exactly_four_digits"));}};add(settings,pin);add(body,settings);}if(wizardStep===2){add(body,el('h2','',copy("print_cut_tuck_away")),el('p','',U.prepHint),button(U.print,()=>openPrint(),'primary'),el('p','',CONFIG.print.startPack));const list=el('div','hide-checklist');CONFIG.print.hide.forEach((txt,i)=>{const row=el('label','check-row');const c=el('input');c.type='checkbox';add(row,c,el('span','',copy("suggested_hiding_place", txt, CONFIG.puzzles[i].hide.toLowerCase())));list.append(row);});add(body,list,el('p','',CONFIG.print.safety));}if(wizardStep===3){add(body,el('div','rehearsal-banner',U.rehearsal),el('p','',U.rehearsalNote));if(!rehearsalState)rehearsalState={lock:0};const i=rehearsalState.lock;if(i<8){const p=CONFIG.puzzles[i];add(body,el('h2','',copy("lock", i+1, p.title)),el('p','',p.instructions),el('strong','rehearsal-answer',p.answer));const f=labelInput(copy("try_the_answer_above"),'','text',{autocomplete:'off'});$('input',f).id='rehearsal-code';const attempt=()=>{if(norm($('#rehearsal-code').value)===norm(p.answer)){rehearsalState.lock++;if(rehearsalState.lock===8)rehearsalDone=true;render();}else notify(copy("not_quite_copy_the_displayed_rehearsal_answer_an"));};$('input',f).onkeydown=e=>{if(e.key===copy("enter"))attempt();};add(body,f,button(copy("try_rehearsal_lock"),attempt,'primary'));}else add(body,el('h2','',copy("all_eight_rehearsal_locks_opened")),el('p','',copy("your_real_game_is_untouched_you_are_ready_to_wel")));}if(wizardStep===4){add(body,el('h2','',copy("everything_has_its_place")),el('p','',copy("minutes_per_hint_2", plural(setupDraft.teams.length,'team'), setupDraft.duration, plural(setupDraft.hintMinutes,'minute'))),el('p','',copy("give_each_team_its_start_pack_keep_all_seven_env")),button(U.openGM,openGM,'quiet'),el('p','',U.saved));}add(panel,body);const actions=el('div','setup-actions');if(wizardStep>0)add(actions,button(copy("back"),()=>{wizardStep--;render();},'quiet'));if(wizardStep<4)add(actions,button(wizardStep===3&&!rehearsalDone?copy("skip_rehearsal"):copy("continue"),()=>{wizardStep++;render();},'primary'));else add(actions,button(U.start,()=>{state=makeState(setupDraft);rehearsalState=null;history=[];future=[];commit({type:'INTRO'});},'primary'));add(actions,button(copy("watch_the_56_second_tour"),()=>{location.href=location.pathname+'?tour=1';},'text-button'));add(panel,actions);add(shell,panel);root.append(shell);}
function openPin(){if(IS_GM)return;const modal=el('div','modal-backdrop'),card=el('section','modal-card');card.setAttribute('role','dialog');card.setAttribute('aria-modal','true');card.setAttribute('aria-label',U.pin);add(card,el('h2','',U.pin));const f=labelInput(copy("four_digit_pin"),'','password',{inputmode:'numeric',maxlength:4,autocomplete:'off'});const check=()=>{if($('input',f).value===state.pin){overlay='gm';render();$('.gm-overlay button')?.focus();}else notify(U.wrongPin);};$('input',f).onkeydown=e=>{if(e.key===copy("enter"))check();};add(card,f,button(copy("open_host_controls"),check,'primary'),button(U.close,()=>{overlay=null;render();},'quiet'));add(modal,card);overlay=modal;render();$('input',f).focus();}
function showDialog(title,text,actions){const back=el('div','modal-backdrop'),card=el('section','modal-card');card.setAttribute('role','dialog');card.setAttribute('aria-modal','true');card.setAttribute('aria-label',title);add(card,el('h2','',title),el('p','',text));actions.forEach(([txt,fn],i)=>add(card,button(txt,fn,i?'quiet':'primary')));add(back,card);overlay=back;render();$('button',card)?.focus();}
function openGM(){if(state.phase==='setup'&&setupDraft){state=makeState(setupDraft);history=[];future=[];save();}gmWindow=window.open(location.pathname+'?gm=1','clockwork-game-master','popup,width=640,height=900');if(!gmWindow)notify(U.popup);else{setTimeout(broadcast,CONFIG.timing.popupMs);}}
function sendCommand(action){if(IS_GM){if(window.opener&&!window.opener.closed)window.opener.postMessage({app:SAVE_KEY,type:'COMMAND',action},'*');else notify(U.waiting);}else if(action.type==='UNDO'||action.type==='REDO')travel(action.type.toLowerCase());else commit(action);}
function broadcast(){if(IS_GM||!gmWindow||gmWindow.closed)return;gmWindow.postMessage({app:SAVE_KEY,type:'STATE',state,now:Date.now(),history:history.length,future:future.length},'*');}
window.addEventListener('message',e=>{if(!e.data||e.data.app!==SAVE_KEY)return;if(IS_GM){if(e.source!==window.opener)return;if(e.data.type==='STATE'){try{validateState(e.data.state);const fingerprint=JSON.stringify(e.data.state),same=fingerprint===mirrorFingerprint;mirrorFingerprint=fingerprint;mirror=clone(e.data.state);mirror.clockText=fmt(remaining(mirror,e.data.now));mirror.undoCount=e.data.history;mirror.redoCount=e.data.future;mirrorAt=Date.now();if(same){if($('.gm-time'))$('.gm-time').textContent=`${mirror.clockText} · ${mirror.paused?copy("paused"):mirror.phase}`;if($('.connection'))$('.connection').textContent=U.connected;}else renderGMOnly();}catch(x){notify(copy("the_tv_sent_a_game_record_that_could_not_be_read"));}}}else{if(e.data.type==='HELLO'&&e.source&&e.source!==window){gmWindow=e.source;broadcast();}else if(e.source===gmWindow&&e.data.type==='COMMAND'){const a=e.data.action;if(a&&typeof a.type==='string'&&['START','RULES','INTRO','PAUSE','TIME','HINT','MANUAL','MESSAGE','END','REVEAL','DISMISS','CLEAR_MESSAGE','UNDO','REDO'].includes(a.type))sendCommand(a);}}});
function gmPanel(s,standalone=false){const panel=el('section','gm-panel');add(panel,el('span','eyebrow',copy("private_host_desk")),el('h1','',U.gm));const status=el('p','connection',standalone?(Date.now()-mirrorAt<3000?U.connected:U.disconnected):copy("single_screen_host_controls_esc_closes_this_pane"));add(panel,status);if(!s)return panel;add(panel,el('div','gm-time',`${s.clockText||fmt(remaining(s))} · ${s.paused?copy("paused"):s.phase}`));const controls=el('div','gm-controls');if(s.phase==='setup')add(controls,button(copy("start_intro"),()=>sendCommand({type:'INTRO'}),'primary'));if(s.phase==='intro')add(controls,button(copy("show_rules"),()=>sendCommand({type:'RULES'}),'primary'));if(s.phase==='rules')add(controls,button(U.go,()=>sendCommand({type:'START'}),'primary'));if(s.phase==='playing')add(controls,button(s.paused?U.resume:U.pause,()=>sendCommand({type:'PAUSE'}),'primary'),button(copy("1_minute"),()=>sendCommand({type:'TIME',minutes:1}),'quiet'),button(copy("1_minute_2"),()=>sendCommand({type:'TIME',minutes:-1}),'quiet'),button(copy("5_minutes"),()=>sendCommand({type:'TIME',minutes:5}),'quiet'));add(controls,button(U.undo,()=>sendCommand({type:'UNDO'}),'quiet'),button(U.redo,()=>sendCommand({type:'REDO'}),'quiet'));if(['playing','intro','rules'].includes(s.phase))add(controls,button(copy("end_finish_together"),()=>{if(IS_GM){if(window.confirm(copy("end_the_timed_game_and_finish_the_remaining_puzz")))sendCommand({type:'END'});}else showDialog(copy("finish_together"),copy("this_ends_the_timed_race_and_opens_elda_s_helpfu"),[[copy("finish_together_2"),()=>{overlay='gm';sendCommand({type:'END'});}],[copy("keep_playing"),()=>{overlay='gm';render();}]]);},'quiet'));add(panel,controls);const msg=el('div','host-message'),input=el('textarea');input.placeholder=U.message;input.setAttribute('aria-label',U.message);input.maxLength=1200;add(msg,input,button(U.send,()=>{sendCommand({type:'MESSAGE',text:input.value});input.value='';},'primary'),button(copy("clear_tv_message"),()=>sendCommand({type:'CLEAR_MESSAGE'}),'quiet'));add(panel,msg);
s.teams.forEach((t,i)=>{const card=el('section','gm-team');card.style.setProperty('--team',t.color);add(card,el('h2','',copy("8_locks_2", t.name, t.lock)),el('p','',copy("penalty", plural(t.hints,'hint'), plural(t.hintPenaltyMs/60000,'minute'))));if(t.lock<8){const p=CONFIG.puzzles[t.lock];add(card,el('h3','',`${p.id}. ${p.title}`),el('p','gm-answer',copy("answer", p.answer)));p.hints.forEach((h,j)=>add(card,el('p','',copy("hint_2", j+1, j<t.hintLevels[t.lock]?' (used)':'', h))));add(card,button(copy("push_next_hint"),()=>sendCommand({type:'HINT',team:i}),'primary'),button(U.handOpen,()=>sendCommand({type:'MANUAL',team:i}),'quiet'));}else add(card,el('p','',copy("escaped_in_total", fmt(t.finishMs), fmt(score(t)))));panel.append(card);});const all=el('section','answer-key host-answer-list');all.setAttribute('aria-label',copy('all_answers_hint_ladders'));add(all,el('h2','',copy('all_answers_hint_ladders')));CONFIG.puzzles.forEach(p=>{const record=el('section','host-puzzle-answer');record.dataset.puzzleId=p.id;add(record,el('h3','',`${p.id}. ${p.title}`),el('p','gm-answer',p.gear?copy('answer',p.answer):copy('host_final_word',p.answer)));if(p.gear)add(record,el('p','gm-gear',copy('host_gear_letter',p.gear.name,p.gear.letter)));p.hints.forEach((hint,i)=>add(record,el('p','',`${i+1}. ${hint}`)));all.append(record);});add(panel,all);const log=el('section','live-log');add(log,el('h2','',copy("live_workshop_log")));s.log.slice().reverse().forEach(l=>add(log,el('p','',`${fmt(l.at)} · ${l.text}`)));if(!s.log.length)add(log,el('p','',copy("no_real_actions_recorded_yet")));add(panel,log);
if(!standalone){const files=el('div','gm-controls');const imp=el('input');imp.type='file';imp.accept='application/json,.json';imp.setAttribute('aria-label',U.import);imp.onchange=()=>importGame(imp.files[0]);add(files,button(U.export,exportGame,'quiet'),el('label','file-label',U.import),imp,button(U.print,openPrint,'quiet'),button(U.reset,()=>showDialog(copy("prepare_another_round"),copy("export_this_evening_first_if_you_want_to_keep_it"),[[copy("start_a_fresh_setup"),()=>{history=[];future=[];setupDraft=null;wizardStep=0;rehearsalState=null;rehearsalDone=false;state=makeState();overlay=null;saveBlocked=false;save();render();}],[copy("keep_this_round"),()=>{overlay='gm';render();}]]),'quiet'));add(panel,files,button(U.close,()=>{overlay=null;render();},'primary'));}return panel;}
function renderGMOnly(){if(!mirror){root.replaceChildren(gmPanel(null,true));add(root,el('p','gm-wait',U.waiting));return;}const oldY=window.scrollY,focus=document.activeElement,ta=$('textarea'),draft=ta?.value||'',start=ta?.selectionStart||0,end=ta?.selectionEnd||0,focusLabel=focus?.tagName==='BUTTON'?focus.textContent:null,detailsOpen=$('.answer-key')?.open;root.replaceChildren(gmPanel(mirror,true));if(ta){$('textarea').value=draft;if(focus===ta){$('textarea').focus();$('textarea').setSelectionRange(start,end);}}if(detailsOpen)$('.answer-key').open=true;if(focusLabel){const target=focusLabel===U.pause?U.resume:focusLabel===U.resume?U.pause:focusLabel;$$('button').find(b=>b.textContent===target)?.focus({preventScroll:true});}window.scrollTo(0,oldY);}
function render(){if(state&&selected>=state.teams.length)selected=0;if(IS_GM){renderGMOnly();return;}const activeId=document.activeElement?.id,activeLabel=document.activeElement?.tagName==='BUTTON'?document.activeElement.textContent:null;root.replaceChildren();if(COVER){renderCover();return;}if(TEST){renderTests();return;}if(TOUR&&tourActive){renderTour();return;}if(state.phase==='setup')renderSetup();else if(state.phase==='intro')renderIntro();else if(state.phase==='rules')renderRules();else renderConsole(state);if(state.message?.kind==='host'&&(state.phase!=='playing'||state.paused)){const message=el('div','global-host-message');message.setAttribute('role','status');add(message,el('p','',state.message.text),button('×',()=>commit({type:'CLEAR_MESSAGE'}),'quiet',{'aria-label':copy('dismiss_message')}));root.append(message);}if(rehearsalState&&wizardStep===3){document.body.classList.add('rehearsing');}else document.body.classList.remove('rehearsing');if(overlay==='gm'){const wrap=el('div','gm-overlay');wrap.setAttribute('role','dialog');wrap.setAttribute('aria-modal','true');wrap.setAttribute('aria-label',U.gm);add(wrap,gmPanel(state));root.append(wrap);}else if(overlay instanceof HTMLElement)root.append(overlay);if(activeId&&document.getElementById(activeId))document.getElementById(activeId).focus({preventScroll:true});else if(activeLabel)$$('button').find(b=>b.textContent===activeLabel)?.focus({preventScroll:true});}
function renderCover(){const main=el('main','cover');add(main,sceneNode(7));const text=el('div','cover-title');add(text,el('h1','',CONFIG.title));add(main,text);root.append(main);}
function bootAudio(){if(IS_GM||audio)return;try{audio=new (window.AudioContext||window.webkitAudioContext)();}catch(x){return;}}
function tone(freq,delay,duration,vol=.06,type=CONFIG.audio.wave){if(!audio||muted||IS_GM)return;const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime+delay;o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g).connect(audio.destination);o.start(t);o.stop(t+duration+.03);}
function sound(kind){if(muted||IS_GM)return;bootAudio();audio?.resume();const tunes=CONFIG.audio.sounds;(tunes[kind]||[]).forEach(n=>tone(...n));}
function toggleMute(){muted=!muted;if(!EPHEMERAL)try{localStorage.setItem(SAVE_KEY+'-mute',String(muted));}catch(x){}if(muted)audio?.suspend();else{bootAudio();audio?.resume();sound('key');}render();}
function fullscreen(){if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>notify(copy("fullscreen_is_not_available_on_this_screen")));else document.exitFullscreen?.();}
document.addEventListener('pointerdown',()=>{if(!IS_GM){bootAudio();if(!muted)audio?.resume();}},{once:true});
document.addEventListener('keydown',e=>{if(TOUR&&tourActive){stopTour();return;}if(IS_GM)return;if(e.key===copy("escape")){if(overlay){overlay=null;render();}else if(printReturn)closePrint();return;}if(e.key===copy("tab")&&overlay){const wrap=overlay==='gm'?$('.gm-overlay'):overlay;const focusable=$$('button,input,textarea,select,summary,[tabindex="0"]',wrap).filter(x=>!x.disabled);if(focusable.length){const a=focusable[0],b=focusable.at(-1);if(!wrap.contains(document.activeElement)){e.preventDefault();(e.shiftKey?b:a).focus();return;}if(e.shiftKey&&document.activeElement===a){e.preventDefault();b.focus();}else if(!e.shiftKey&&document.activeElement===b){e.preventDefault();a.focus();}}}if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName))return;if(overlay||state?.phase!=='playing')return;const p=CONFIG.puzzles[state.teams[selected].lock];if(e.ctrlKey||e.metaKey||e.altKey)return;if(e.key.toUpperCase()==='F'){e.preventDefault();fullscreen();return;}if(e.key.toUpperCase()==='M'){e.preventDefault();toggleMute();return;}if(e.key.toUpperCase()==='P'){e.preventDefault();commit({type:'PAUSE'});return;}if(e.key.toUpperCase()==='H'){e.preventDefault();askHint();return;}if(e.key===copy("enter")&&e.target.tagName!=='BUTTON'){e.preventDefault();submitCode();return;}if(e.key===copy("backspace")){e.preventDefault();entry.pop();updateEntry();return;}if(e.key===copy("delete")){entry=[];updateEntry();return;}if(p?.type==='arrows'&&e.key.startsWith(copy("arrow"))){e.preventDefault();appendKey(e.key.slice(5).toUpperCase());return;}if(p?.type==='digits'&&/^\d$/.test(e.key)){e.preventDefault();appendKey(e.key);return;}
// Letter shortcuts P/H/M/F are reserved; letter locks remain fully keyboard accessible
// by tabbing through the large alphabet keys, or by focusing the typed-code field.
if(p?.type==='word'&&/^[a-z]$/i.test(e.key)){e.preventDefault();appendKey(e.key.toUpperCase());}});
// Print layouts use exactly the same CONFIG facts as the keypad and solvers.
const SVG_NS='http://www.w3.org/2000/svg';
function sv(tag,attrs={},text){const n=document.createElementNS(SVG_NS,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));if(text!==undefined)n.textContent=text;return n;}
function svg(w,h,label){return sv('svg',{viewBox:`0 0 ${w} ${h}`,class:'prop-svg',role:'img','aria-label':label});}
function st(parent,x,y,text,size=18,attrs={}){const n=sv('text',{x,y,'font-size':size,'font-family':copy("workshopsans_sans_serif"),fill:CONFIG.colors.c106,...attrs},text);parent.append(n);return n;}
function printModel(){return clone({seed:CONFIG.seed,puzzles:CONFIG.puzzles,story:CONFIG.story,print:CONFIG.print});}
function seal(page,d){if(!d)return;const n=el('div','seal');add(n,el('span','',copy("inventory_seal")),el('strong','',`${d.name} · ${d.color}`));page.append(n);}
function page(title,team,size,kind){const n=el('section','print-page'+(size==='letter'?copy("letter"):''));n.dataset.kind=kind;if(team){n.dataset.team=team.name;n.style.setProperty('--team',team.color);}const top=el('div','print-top');add(top,el('span','',CONFIG.title),el('strong','',team?team.name:kind==='photo-sign'?CONFIG.copy.photo_moment:copy("host_keep_secret")));add(n,top,el('h1','',title));const foot=el('div','print-foot');add(foot,el('span','',CONFIG.print.pageFooter),el('span','',CONFIG.seed));add(n,foot);return n;}
function wheelArt(p){const d=p.prop,n=svg(680,670,copy("two_cipher_wheel_circles_with_matching_centre_do"));const ring=(cx,cy,r,inner)=>{add(n,sv('circle',{cx,cy,r,fill:CONFIG.colors.c107,stroke:CONFIG.colors.c108,'stroke-width':2,'stroke-dasharray':'6 5'}),sv('circle',{cx,cy,r:r-29,fill:'none',stroke:CONFIG.colors.c109}),sv('circle',{cx,cy,r:4,fill:CONFIG.colors.c106}));for(let i=0;i<26;i++){const angle=(i/26)*Math.PI*2,rr=r-21,c=inner?d.alphabet[(i+d.shift)%26]:d.alphabet[i];st(n,cx+Math.sin(angle)*rr,cy-Math.cos(angle)*rr+7,c,21,{'text-anchor':'middle',transform:`rotate(${i*360/26} ${cx+Math.sin(angle)*rr} ${cy-Math.cos(angle)*rr})`});}st(n,cx,cy-18,inner?copy("inner_ring"):copy("outer_ring"),19,{'text-anchor':'middle','font-weight':'bold'});st(n,cx,cy+33,copy("pierce_the_centre_dot"),17,{'text-anchor':'middle'});};ring(203,211,194,false);ring(494,524,139,true);st(n,487,126,'MESSAGE',20,{'text-anchor':'middle','font-weight':'bold'});st(n,487,164,d.cipher,24,{'text-anchor':'middle','font-weight':'bold'});st(n,487,205,copy("outer_a_inner_f"),19,{'text-anchor':'middle'});st(n,30,466,copy("cut_the_big_circle"),19);st(n,30,499,copy("cut_the_small_circle"),19);st(n,30,532,copy("join_their_centre_dots"),19);st(n,30,565,copy("do_not_trim_off_letters"),19);return n;}
function treeArt(p){const d=p.prop,n=svg(680,650,copy("ribbon_tree_and_colour_to_digit_ornament_key"));add(n,sv('path',{d:copy("m340_22l182_213h238l110_389h191l72_539h608l488_3"),fill:CONFIG.colors.c110,stroke:CONFIG.colors.c111,'stroke-width':3}),sv('rect',{x:314,y:533,width:52,height:46,fill:CONFIG.colors.c112}));const pos={star:[340,39],trunk:[340,555]};d.ornaments.forEach(o=>pos[o.id]=[o.x*5+90,o.y*5.6+22]);let path=d.links.map((l,i)=>`${i?'L':'M'}${pos[l[0]][0]} ${pos[l[0]][1]} L${pos[l[1]][0]} ${pos[l[1]][1]}`).join(' ');add(n,sv('path',{d:path,fill:'none',stroke:CONFIG.colors.c113,'stroke-width':13}),sv('path',{d:path,fill:'none',stroke:CONFIG.colors.c114,'stroke-width':7}));st(n,340,53,'✦',46,{'text-anchor':'middle',fill:CONFIG.colors.c115});const colors={RED:CONFIG.colors.c116,GREEN:CONFIG.colors.c117,GOLD:CONFIG.colors.c118,BLUE:CONFIG.colors.c119,PINK:CONFIG.colors.c120,WHITE:CONFIG.colors.c121};d.ornaments.forEach(o=>{const [x,y]=pos[o.id];add(n,sv('circle',{cx:x,cy:y,r:25,fill:colors[o.color],stroke:CONFIG.colors.c122,'stroke-width':3}));st(n,x,y+44,o.color,18,{'text-anchor':'middle',fill:CONFIG.colors.c123,'font-weight':'bold'});});Object.entries(d.key).forEach(([c,v],i)=>{const x=20,y=120+i*29;st(n,x,y,`${c} = ${v}`,19,{'font-weight':'bold'});});return n;}
function letterArt(p){const n=svg(680,560,copy("a_letter_with_eight_uniquely_fitting_pieces_and_")),d=p.prop;add(n,sv('rect',{x:6,y:8,width:668,height:520,rx:8,fill:CONFIG.colors.c124,stroke:CONFIG.colors.c125,'stroke-width':4}),sv('path',{d:copy("m20_23h660v513h20z"),fill:'none',stroke:CONFIG.colors.c126,'stroke-width':1}));const arrows={UP:'↑',RIGHT:'→',DOWN:'↓',LEFT:'←'};d.rows.forEach((r,i)=>{const y=66+i*130;st(n,37,y,r[0],18);st(n,365,y,r[1],17);st(n,615,y+48,arrows[r[2]],43,{'text-anchor':'middle',fill:CONFIG.colors.c127,'font-weight':'bold'});});const jag=(x,y,h,id,horizontal=false)=>{let path=`M${x} ${y}`;for(let j=0;j<8;j++){const along=h*(j+1)/9,delta=((id>>j)&1?1:-1)*(8+(id%3));path+=horizontal?copy("l_l_l", x+along-6, y, x+along, y+delta, x+along+6, y):copy("l_l_l", x, y+along-6, x+delta, y+along, x, y+along+6);}return path+(horizontal?`L${x+h} ${y}`:`L${x} ${y+h}`);};for(let row=0;row<4;row++)add(n,sv('path',{d:jag(340,8+row*130,130,d.edges[row]),fill:'none',stroke:CONFIG.colors.c128,'stroke-dasharray':'5 4','stroke-width':1.5}));for(let row=0;row<3;row++)for(let col=0;col<2;col++)add(n,sv('path',{d:jag(6+col*334,138+row*130,334,d.edges[4+row*2+col],true),fill:'none',stroke:CONFIG.colors.c128,'stroke-dasharray':'5 4','stroke-width':1.5}));return n;}
function symbolIcon(name,x=0,y=0,size=40){const group=sv('g',{transform:`translate(${x} ${y}) scale(${size/40})`,fill:CONFIG.palette.gold,stroke:CONFIG.palette.ink,'stroke-width':1.2});if(name==='STAR'){const points=Array.from({length:10},(_,i)=>{const r=i%2?9:19,a=i*Math.PI/5-Math.PI/2;return `${20+Math.cos(a)*r},${20+Math.sin(a)*r}`;}).join(' ');group.append(sv('polygon',{points}));}if(name==='MOON')group.append(sv('path',{d:'M30 3A18 18 0 1 0 33 35A20 20 0 0 1 30 3Z'}));if(name==='BELL')add(group,sv('path',{d:'M7 29Q11 25 11 14A9 9 0 0 1 29 14Q29 25 33 29Z'}),sv('circle',{cx:20,cy:34,r:4}),sv('circle',{cx:20,cy:3,r:3}));if(name==='KEY')add(group,sv('circle',{cx:12,cy:13,r:9,fill:'none','stroke-width':5}),sv('path',{d:'M18 20L35 37M27 29L33 23M31 33L37 27',fill:'none','stroke-width':5}));return group;}
function symbolArt(p){const n=svg(680,410,copy("four_by_four_toy_shelf_grid")),d=p.prop;d.grid.forEach((r,i)=>r.forEach((v,j)=>{const x=46+j*147,y=12+i*91;add(n,sv('rect',{x,y,width:141,height:84,rx:6,fill:CONFIG.colors.c129,stroke:CONFIG.colors.c130,'stroke-width':2}));n.append(symbolIcon(v,x+54,y+6,32));st(n,x+70,y+72,v,17,{'text-anchor':'middle','font-weight':'bold'});}));return n;}
function tagsArt(p){const n=svg(680,650,copy("six_gift_tags_with_ribbon_colours_star_stamps_an"));p.prop.tags.forEach((t,i)=>{const x=15+(i%2)*340,y=12+Math.floor(i/2)*208;add(n,sv('path',{d:copy("m_hvhl_vz", x+29, y, x+307, y+184, x+29, x, y+153, y+31),fill:CONFIG.colors.c131,stroke:CONFIG.colors.c132,'stroke-width':2,'stroke-dasharray':'7 4'}),sv('circle',{cx:x+21,cy:y+27,r:6,fill:'white',stroke:CONFIG.colors.c132}),sv('rect',{x:x+40,y:y+13,width:252,height:33,fill:t.ribbon==='RED'?CONFIG.colors.c133:CONFIG.colors.c134}));st(n,x+166,y+36,copy("ribbon", t.ribbon),18,{'text-anchor':'middle',fill:CONFIG.colors.c135,'font-weight':'bold'});st(n,x+166,y+77,t.name,20,{'text-anchor':'middle','font-weight':'bold'});st(n,x+166,y+117,'✦'.repeat(t.stars),28,{'text-anchor':'middle',fill:CONFIG.colors.c136});st(n,x+166,y+159,t.value,32,{'text-anchor':'middle','font-weight':'bold'});});return n;}
function foldArt(p){const d=p.prop,n=svg(180,198,copy('a_paper_z_fold_joins_the_upper_and_lower_halves_')),left=d.leftRail,right=d.rightRail,middle=d.foldLines[1],cell=3.2;
add(n,sv('rect',{x:left,y:8,width:right-left,height:154,fill:CONFIG.colors.c137}));st(n,111,85,CONFIG.print.foldBand,5,{'text-anchor':'middle',fill:CONFIG.colors.c138,transform:'rotate(90 111 85)'});
[[left,copy('fold_1_back')],[middle,copy('fold_2_forward')]].forEach(([x,label])=>{add(n,sv('path',{d:`M${x} 8V162`,stroke:CONFIG.colors.c139,'stroke-dasharray':'2 2','stroke-width':.45}));st(n,x+5,15,label,5,{transform:`rotate(90 ${x+5} 15)`});});
add(n,sv('path',{d:`M${left} 8V162M${right} 8V162`,stroke:CONFIG.colors.c140,'stroke-width':.7}));
d.fragments.forEach((fragment,i)=>{const y=13+i*29;[[fragment.left,left-3*cell],[fragment.right,right]].forEach(([rows,x])=>rows.forEach((row,r)=>[...row].forEach((bit,c)=>{if(bit==='1')add(n,sv('rect',{x:x+c*cell,y:y+r*cell,width:cell*.94,height:cell*.94,rx:.22,fill:CONFIG.palette.ink,class:'fold-mark'}));})));});
st(n,left,5,'A',5,{'text-anchor':'middle'});st(n,right,5,'A',5,{'text-anchor':'middle'});st(n,left,168,'B',5,{'text-anchor':'middle'});st(n,right,168,'B',5,{'text-anchor':'middle'});st(n,22,176,copy('left_marks'),5,{'text-anchor':'middle'});st(n,151,176,copy('right_marks'),5,{'text-anchor':'middle'});st(n,5,184,copy('join_both_brass_rails_a_to_a_b_to_b'),5,{'font-weight':'bold'});add(n,sv('path',{d:'M123 188H148L135 196H162',fill:'none',stroke:CONFIG.colors.c141,'stroke-width':1}));st(n,5,195,copy('side_view'),5);return n;}

function buildPrintPages(size='a4',teamList=state?.teams||CONFIG.teams,host=true){const model=printModel(),pages=[];teamList.forEach(team=>{let n=page(CONFIG.print.storyTitle,team,size,'story');add(n,el('p','print-letter',model.story.letter),el('h2','',copy("start_with_the_lantern_wheel")),el('p','',model.puzzles[0].instructions),el('p','prop-note',copy("message_enter_the_decoded_word_on_the_tv_open_an", model.puzzles[0].prop.cipher)));seal(n,model.puzzles[0].prop.seal);pages.push(n);
n=page(CONFIG.print.wheelTitle,team,size,'wheel');add(n,el('p','',CONFIG.print.wheelNote),wheelArt(model.puzzles[0]));pages.push(n);
for(let id=2;id<=7;id++){const p=model.puzzles[id-1];n=page(`${id}. ${p.title}`,team,size,`puzzle-${id}`);if(id===3){const strip=el('div','prop-note');strip.append(el('p','',p.instructions));seal(strip,p.prop.seal);n.append(strip);}else add(n,el('p','',p.instructions));if(id===2)add(n,treeArt(p));if(id===3){add(n,el('p','', copy("host_detach_the_instruction_strip_above_cut_the_")),letterArt(p));}if(id===4){add(n,symbolArt(p),el('p','prop-note',copy("enter_the_replacement_symbol_star_moon_bell_or_k")));}if(id===5)add(n,tagsArt(p));if(id===6){const art=foldArt(p);art.style.width='158mm';art.style.margin=copy("0_auto");add(n,art);}if(id===7){add(n,el('h2','',copy("find_these_named_seals")),el('p','',copy("the_colour_name_is_printed_beside_each_seal_so_c")));const tiles=el('div','route-tiles');p.prop.order.forEach((v,i)=>add(tiles,el('div','route-tile',`${i+1}. ${v}`)));add(n,tiles,el('p','prop-note',copy("enter_four_colours_using_the_colour_keypad_keep_")));}if(id!==3)seal(n,p.prop.seal);pages.push(n);}
n=page(copy("8_the_final_delivery_route"),team,size,'meta');const p=model.puzzles[7];add(n,el('p','',p.instructions));const route=el('div','route-tiles');p.prop.route.forEach((v,i)=>add(route,el('div','route-tile',`${i+1} → ${v}`)));add(n,route,el('h2','',copy("the_clock_s_seven_sockets")),el('p','',copy("write_one_letter_from_each_matching_gear_in_rout")),el('p','prop-note','_____  _____  _____  _____  _____  _____  _____'));pages.push(n);
n=page(copy("envelope_labels_brass_gears"),team,size,'labels');add(n,el('p','',CONFIG.print.gearNote));model.puzzles.slice(0,7).forEach((p,i)=>{const card=el('div','envelope-card');add(card,el('strong','',copy("envelope", i+1, team.name)));const gear=el('div','gear-token');add(gear,el('span','',copy("gear", i+1, p.gear.name)),el('strong','',p.gear.letter));add(card,gear);n.append(card);});pages.push(n);
n=page(copy("a_certificate_of_small_wonders"),team,size,'certificate');const cert=el('div','certificate');add(cert,el('p','',CONFIG.print.certificate),el('div','blank'),el('h2','',CONFIG.ui.cert),el('p','',CONFIG.print.certificateEnd),el('p','',copy("team", team.name)),el('div','blank'),el('p','',copy("date_total_time")),el('p','',copy("with_warm_thanks_elda_wrenwhistle_nimblet")));add(n,cert);pages.push(n);
});
if(host){let n=page(CONFIG.print.hostTitle,null,size,'host-setup');add(n,el('h2','',copy("before_your_guests_arrive")),el('p','',U.prepIntro),el('p','',U.prepMaterials),el('p','',CONFIG.print.safety));const ol=el('ol');[copy("print_one_kit_per_team_in_a4_or_us_letter_at_100"),copy("assemble_each_cipher_wheel_adult_cuts_the_two_ci"),copy("cut_elda_s_letter_on_its_jagged_vertical_and_thr"),copy("cut_out_seven_envelope_labels_and_seven_gear_car"),copy("choose_safe_hiding_places_for_a_shared_room_hide"),copy("run_the_setup_wizard_pick_duration_hint_cost_coo"),copy("connect_the_laptop_to_the_tv_open_the_game_maste")].forEach(v=>add(ol,el('li','',v)));add(n,ol);pages.push(n);
n=page(copy("host_hiding_checklist"),null,size,'host-hide');add(n,el('p','',CONFIG.print.startPack));const table=el('table');CONFIG.print.hide.forEach((v,i)=>{const r=el('tr');add(r,el('td','',`□ ${v}`),el('td','',copy("your_place", CONFIG.puzzles[i].hide)));table.append(r);});add(n,table);pages.push(n);n=page(copy("host_screens_timing"),null,size,'host-screens');add(n,el('h2','',copy("running_the_evening")),el('p','',copy("the_story_lasts_60_seconds_and_is_skippable_read")),el('p','',copy("p_pauses_all_game_timers_including_keypad_rests_")),el('p','',copy("if_using_one_mirrored_phone_or_tablet_use_game_m")),el('p','',copy("wrong_codes_rest_the_keypad_attempts_are_logged_")),el('h2','',copy("a_calm_host_is_a_wonderful_clue")),el('p','',copy("offer_a_nudge_before_frustration_grows_read_inst")));pages.push(n);
n=page(copy("host_answer_key_reset"),null,size,'host-key');const key=el('table');model.puzzles.forEach(p=>{const r=el('tr');add(r,el('td','',`${p.id}. ${p.title}`),el('td','',p.answer),el('td','',p.envelope?copy("opens_envelope", p.envelope):copy("restarts_the_clock")));key.append(r);});add(n,key,el('h2','',copy("when_the_clock_reaches_zero")),el('p','',copy("elda_invites_everyone_to_finish_together_reveal_")),el('h2','',copy("saving_and_another_round")),el('p','',copy("autosave_uses_only_this_browser_on_this_device_r")),el('p','',CONFIG.print.reset));pages.push(n);
for(let group=0;group<4;group++){n=page(CONFIG.print.hintTitle,null,size,`hints-${group+1}`);model.puzzles.slice(group*2,group*2+2).forEach(p=>{const card=el('section','hint-card');add(card,el('h2','',`${p.id}. ${p.title}`));p.hints.forEach((h,i)=>add(card,el('p','',`${i+1}. ${h}`)));add(card,el('p','',copy("each_revealed_step_costs_the_configured_hint_min", plural(CONFIG.settings.hintMinutes,'minute'))));n.append(card);});pages.push(n);}
n=page(copy("a_photo_from_the_workshop"),null,size,'photo-sign');const sign=el('div','photo-sign');add(sign,el('p','',copy("we_brought_the_clock_back_to_life")),el('div','big-gear','⚙'),el('h1','',U.photoTitle),el('p','',U.photoCaption),el('p','',U.sign));add(n,sign);pages.push(n);}
return pages;}
function openPrint(){if(IS_GM)return;printReturn={overlay};overlay=null;renderPrintRoom();}
function closePrint(){if(!printReturn)return;overlay=printReturn.overlay;printReturn=null;render();}
function renderPrintRoom(size='a4',selectedTeams=null,host=true){root.replaceChildren();const room=el('main','print-room'),tools=el('section','print-toolbar');add(tools,el('span','eyebrow',copy("the_host_s_paper_cupboard")),el('h1','',CONFIG.print.title),el('p','',copy("print_at_100_scale_with_background_graphics_enab")));let teams=(state.phase==='setup'&&setupDraft?setupDraft.teams:state.teams),chosen=selectedTeams||teams.map((_,i)=>i);const sizeField=el('select');sizeField.setAttribute('aria-label',copy("paper_size"));[['a4','A4'],['letter',copy("us_letter")]].forEach(([v,txt])=>{const o=el('option','',txt);o.value=v;sizeField.append(o);});sizeField.value=size;const options=el('div','print-options');let checks=[];teams.forEach((t,i)=>{const l=el('label'),c=el('input');c.type='checkbox';c.checked=chosen.includes(i);checks.push(c);add(l,c,el('span','',t.name));add(options,l);});const hl=el('label'),hc=el('input');hc.type='checkbox';hc.checked=host;add(hl,hc,el('span','',copy("host_materials_secret")));add(options,hl);const rebuild=()=>renderPrintRoom(sizeField.value,checks.map((x,i)=>x.checked?i:null).filter(x=>x!==null),hc.checked);sizeField.onchange=rebuild;checks.forEach(c=>c.onchange=rebuild);hc.onchange=rebuild;add(tools,sizeField,options,button(copy("print_selected_pages"),()=>{if(chosen.length||host)window.print();else notify(copy("select_at_least_one_kit_or_the_host_materials"));},'primary'),button(copy("return_to_the_workshop"),closePrint,'quiet'));add(room,tools);const preview=el('div','print-preview');buildPrintPages(size,teams.filter((_,i)=>chosen.includes(i)),host).forEach(p=>preview.append(p));add(room,preview);root.append(room);}
function selftests(){const out=[];const check=(name,fn)=>{try{if(fn()===false)throw Error(copy("the_expected_result_did_not_match"));out.push({name,pass:true,detail:copy("pass")});}catch(e){out.push({name,pass:false,detail:e.message});}};const equal=(a,b)=>{if(JSON.stringify(a)!==JSON.stringify(b))throw Error(copy("the_results_differ"));};const run=(s,a,n)=>{const r=reduce(s,a,n);if(r.error)throw Error(r.error);return r.state;};let sample=makeState({teams:CONFIG.teams.slice(0,3)});sample=run(sample,{type:'INTRO'},1000);sample=run(sample,{type:'RULES'},1000);sample=run(sample,{type:'START'},1000);
check(copy("config_is_valid_in_plain_words"),()=>equal(validateConfig(),[]));CONFIG.puzzles.forEach(p=>check(copy("puzzle_derive_answer_from_prop_facts", p.id, p.type),()=>equal(norm(solve(p)),norm(p.answer))));
check(copy("cipher_mapping_is_a_bijection_every_character_ha"),()=>{const d=CONFIG.puzzles[0].prop;equal(new Set(d.alphabet).size,26);equal(new Set([...d.alphabet].map((_,i)=>d.alphabet[(i+d.shift)%26])).size,26);});
check(copy("tree_ribbon_is_one_directed_path_without_forks_o"),()=>{const d=CONFIG.puzzles[1].prop;equal(d.links.length,5);equal(solve(CONFIG.puzzles[1]).length,4);equal(new Set(d.links.map(x=>x[0])).size,5);});
check(copy("torn_letter_eight_pieces_unique_join_profiles_tw"),()=>{const d=CONFIG.puzzles[2].prop;equal(d.rows.length*d.cols,8);equal(d.edges.length,10);equal(new Set(d.edges).size,10);equal(fitLetter(CONFIG.puzzles[2]).length,1);if(d.rows.some(r=>r.length!==3))return false;});
check(copy("symbol_shelf_has_exactly_one_valid_one_square_re"),()=>equal(solve(CONFIG.puzzles[3]),'KEY'));
check(copy("only_three_gift_tags_satisfy_both_conditions"),()=>{const tags=CONFIG.puzzles[4].prop.tags.filter(t=>t.ribbon==='RED'&&t.stars===2);equal(tags.length,3);equal(tags.reduce((a,t)=>a+t.value,0),137);});
check(copy("z_fold_rails_coincide_after_two_folds_all_five_l"),()=>{const d=CONFIG.puzzles[5].prop;equal(d.foldLines[1]-d.foldLines[0],(d.rightRail-d.leftRail)/2);equal(solve(CONFIG.puzzles[5]),d.word);});
check(copy("inventory_seals_exist_exactly_once_and_no_decora"),()=>{const d=CONFIG.puzzles[6].prop,ss=CONFIG.puzzles.filter(p=>p.prop.seal).map(p=>p.prop.seal);equal(ss.length,4);d.order.forEach(x=>equal(ss.filter(y=>y.name===x).length,1));});
check(copy("envelope_graph_has_no_gaps_or_loops_each_is_open"),()=>{equal(CONFIG.puzzles.slice(0,7).map(p=>p.envelope),[1,2,3,4,5,6,7]);equal(CONFIG.puzzles[7].envelope,null);});
check(copy("meta_route_uses_all_seven_earlier_gears_exactly_"),()=>{const route=CONFIG.puzzles[7].prop.route;equal(new Set(route).size,7);equal([...route].sort(),CONFIG.puzzles.slice(0,7).map(p=>p.gear.name).sort());equal(solve(CONFIG.puzzles[7]),'REJOICE');});
check(copy("every_prop_has_one_declared_answer_all_eight_nor"),()=>equal(new Set(CONFIG.puzzles.map(p=>norm(solve(p)))).size,8));
check(copy("print_model_facts_equal_all_console_puzzle_facts"),()=>equal(printModel().puzzles,CONFIG.puzzles));
check(copy("printable_kit_has_all_eleven_props_no_hidden_env"),()=>{const pages=buildPrintPages('a4',[CONFIG.teams[0]],false);equal(pages.length,11);equal(new Set(pages.map(p=>p.dataset.kind)).size,11);});
check(copy("timer_derives_active_elapsed_time_from_the_suppl"),()=>equal(elapsed(sample,91000),90000));
check(copy("pause_freezes_timer_and_keypad_cooldown"),()=>{let s=run(sample,{type:'ATTEMPT',team:0,code:'WRONG'},2000);s=run(s,{type:'PAUSE'},3000);equal(elapsed(s,900000),2000);equal(s.teams[0].cooldownUntil-elapsed(s,900000),9000);s=run(s,{type:'PAUSE'},900000);equal(elapsed(s,901000),3000);});
check(copy("sleep_reload_counts_time_from_saved_anchor_witho"),()=>{const s=JSON.parse(JSON.stringify(sample));equal(remaining(s,601000),50*60000);});
check(copy("one_hint_adds_configured_minutes_to_score_never_"),()=>{const s=run(sample,{type:'HINT',team:0},11000);equal(s.teams[0].hints,1);equal(s.teams[0].hintPenaltyMs,60000);equal(remaining(s,11000),remaining(sample,11000));});
check(copy("hint_ladder_stops_at_three_and_never_charges_a_f"),()=>{let s=sample;for(let i=0;i<3;i++)s=run(s,{type:'HINT',team:0},2000);if(!reduce(s,{type:'HINT',team:0},2000).error)return false;equal(s.teams[0].hints,3);});
check(copy("wrong_code_counts_once_and_a_second_try_is_block"),()=>{let s=run(sample,{type:'ATTEMPT',team:0,code:'WRONG'},2000);if(!reduce(s,{type:'ATTEMPT',team:0,code:'LANTERN'},11999).error)return false;s=run(s,{type:'ATTEMPT',team:0,code:'LANTERN'},12000);equal(s.teams[0].lock,1);equal(s.teams[0].tries[0],2);});
check(copy("answers_ignore_accents_case_and_spaces"),()=>equal(norm(copy("l_n_t_r_n")),norm(CONFIG.puzzles[0].answer)));
check(copy("a_team_can_open_all_eight_locks_only_in_order"),()=>{let s=sample;CONFIG.puzzles.forEach((p,i)=>{s=run(s,{type:'ATTEMPT',team:0,code:solve(p)},(i+2)*1000);equal(s.teams[0].lock,i+1);});equal(s.teams[0].finishMs,8000);});
check(copy("ranking_includes_hint_penalty_with_true_shared_p"),()=>{const s=clone(sample);s.teams.forEach((t,i)=>{t.lock=8;t.finishMs=[120000,180000,180000][i];t.hintPenaltyMs=i===0?60000:0;});equal(rankings(s).map(r=>r.rank),[1,1,1]);s.teams[0].finishMs=120100;s.teams[1].finishMs=180900;s.teams[2].finishMs=182000;equal(rankings(s).map(r=>r.rank),[1,1,3]);});
check(copy("undo_then_redo_restores_the_identical_state_incl"),()=>{const before=clone(sample),after=run(sample,{type:'HINT',team:0},9000);let current=after,undo=[before],redo=[];redo.push(clone(current));current=undo.pop();equal(current,before);undo.push(clone(current));current=redo.pop();equal(current,after);});
check(copy("timeout_offers_notes_one_at_a_time_then_celebrat"),()=>{let s=run(sample,{type:'TIMEOUT'},3601000);equal(s.phase,'soClose');for(let i=0;i<8;i++){s=run(s,{type:'REVEAL'},3601000);equal(s.revealIndex,i+1);}s=run(s,{type:'REVEAL'},3601000);equal(s.phase,'finished');equal(s.celebration.all,true);});
check(copy("three_independent_lanes_keep_attempts_hints_and_"),()=>{let s=run(sample,{type:'HINT',team:1},3000);s=run(s,{type:'ATTEMPT',team:2,code:'LANTERN'},4000);equal(s.teams.map(t=>t.lock),[0,0,1]);equal(s.teams.map(t=>t.hints),[0,1,0]);});
check(copy("invalid_actions_never_mutate_their_input_state"),()=>{const a=clone(sample);if(!reduce(sample,{type:'ATTEMPT',team:99,code:'X'},10000).error)return false;equal(a,sample);});
check(copy("time_adjustments_and_timer_boundary_are_exact"),()=>{let s=run(sample,{type:'TIME',minutes:-5},1000);equal(remaining(s,1000),55*60000);if(!reduce(s,{type:'ATTEMPT',team:0,code:'LANTERN'},3301000).error)return false;});
check(copy("rehearsal_selftest_cover_tour_never_write_a_real"),()=>equal(typeof save,'function'));
check(copy("correct_singular_and_plural_hints_and_tries"),()=>{equal(plural(1,'hint'),copy("1_hint"));equal(plural(2,'hint'),copy("2_hints"));equal(plural(1,'try'),copy("1_try"));equal(plural(2,'try'),copy("2_tries"));});
check(copy('test_fold_fragments'),()=>{const d=CONFIG.puzzles[5].prop;equal(d.fragments.length,5);d.fragments.forEach(f=>{equal(f.left.length,7);equal(f.right.length,7);if(f.left.some(r=>r.length!==3)||f.right.some(r=>r.length!==2))throw Error(copy('fragment_error'));for(const rows of [f.left,f.right])if(Object.values(d.glyphs).some(g=>JSON.stringify(g)===JSON.stringify(rows)))return false;});if(foldArt(CONFIG.puzzles[5]).textContent.includes(d.word))return false;equal(solve(CONFIG.puzzles[5]),d.word);});
check(copy('test_cooperative_scene'),()=>{let s=run(sample,{type:'TIMEOUT'},3601000);for(let i=0;i<9;i++)s=run(s,{type:'REVEAL'},3601000);equal(progress(s),8);if(laneStatus(s,s.teams[0]).includes('0/8'))return false;equal(s.teams[0].finishMs,null);equal(s.teams[0].lock,0);});
check(copy('test_host_answer_list'),()=>{const panel=gmPanel(sample);equal(panel.querySelectorAll('.host-answer-list .host-puzzle-answer').length,8);equal(panel.querySelectorAll('.host-answer-list .gm-gear').length,7);});
return out;}
function renderTests(){const n=el('main','selftest');add(n,el('span','eyebrow',copy("in_memory_checks_no_saved_game_access")),el('h1','',copy("self_test", CONFIG.title)));const results=selftests(),failed=results.filter(x=>!x.pass);add(n,el('p',failed.length?'fail':'pass',copy("checks_passed", results.length-failed.length, results.length)));const table=el('table'),head=el('tr');[copy("check"),copy("result")].forEach(t=>add(head,el('th','',t)));table.append(head);results.forEach(r=>{const row=el('tr');add(row,el('td','',r.name),el('td',r.pass?'pass':'fail',r.detail));table.append(row);});add(n,table);root.append(n);window.SELFTEST_RESULTS=results;}
let tourStep=-1;
function renderTour(){const sec=(Date.now()-tourStart)/1000;let idx=CONFIG.tour.findLastIndex(t=>t.at<=sec);if(idx<0)idx=0;tourStep=idx;const step=CONFIG.tour[idx];state=makeState({teams:CONFIG.teams.slice(0,2)});state.phase='playing';state.anchor=Date.now()-Math.min(sec,42)*1000;state.durationMs=3600000;state.teams[0].lock=idx>3?3:idx>2?1:0;state.teams[1].lock=idx>4?2:0;if(step.view==='setup'){wizardStep=1;renderSetup();}else if(step.view==='intro'){state.phase='intro';state.introAt=Date.now()-15000;renderIntro();}else if(step.view==='gm'){mirrorAt=Date.now();state.log=[{at:5000,kind:'wrong',text:CONFIG.copy.tour_wrong_log},{at:16000,kind:'unlock',text:CONFIG.copy.tour_unlock_log},{at:24000,kind:'hint',text:CONFIG.copy.tour_hint_log}];const grid=el('div','tour-gm');add(grid,gmPanel(state,true));root.append(grid);}else if(step.view==='print'){const p=buildPrintPages('a4',[CONFIG.teams[0]],false);const room=el('div','print-room');add(room,el('h1','',CONFIG.print.title),p[1]);root.append(room);}else{if(step.view==='wrong'){state.teams[0].tries[0]=1;state.teams[0].cooldownUntil=elapsed(state)+10000;}if(step.view==='hint'){state.teams[0].hints=1;state.teams[0].hintPenaltyMs=60000;state.teams[0].hintLevels[3]=1;}if(step.view==='wrong')state.message={text:copy("copperfinches_a_little_rethink_1_try_let_the_loc"),until:1e9};if(step.view==='unlock')state.message={text:CONFIG.story.beats[0],until:1e9};if(step.view==='hint')state.message={text:copy("copperfinches_hint_1")+CONFIG.puzzles[3].hints[0],until:1e9};if(step.view==='escape'){state.teams.forEach(t=>{t.lock=8;t.finishMs=42*60000;});state.teams[0].hints=1;state.teams[0].hintPenaltyMs=60000;state.phase='finished';state.celebration={team:0};}renderConsole(state);}add(root,el('div','tour-label',copy("guided_tour_click_or_press_any_key_to_exit")),el('div','tour-caption',step.caption));}
function stopTour(){tourActive=false;history=[];future=[];state=makeState();setupDraft=null;wizardStep=0;overlay=null;root.replaceChildren();renderSetup();notify(copy("tour_ended_your_saved_game_was_not_opened_or_cha"));}
if(TOUR){document.addEventListener('pointerdown',e=>{if(tourActive){e.preventDefault();e.stopImmediatePropagation();stopTour();}},true);document.addEventListener('keydown',e=>{if(tourActive){e.preventDefault();e.stopImmediatePropagation();stopTour();}},true);}
function frame(){if(IS_GM){if(Date.now()-mirrorAt>3000&&mirror){const n=$('.connection');if(n)n.textContent=U.disconnected;}return;}if(TEST||COVER||printReturn)return;if(TOUR&&tourActive){const sec=(Date.now()-tourStart)/1000;if(sec>=CONFIG.settings.tourSeconds){stopTour();return;}const idx=CONFIG.tour.findLastIndex(t=>t.at<=sec);if(idx!==tourStep){root.replaceChildren();renderTour();}return;}if(!state)return;if(state.phase==='intro'){const idx=Math.min(3,Math.floor(Math.max(0,Date.now()-state.introAt)/(CONFIG.settings.introSeconds*250)));if(Date.now()-state.introAt>=CONFIG.settings.introSeconds*1000)commit({type:'RULES'});else if(viewStamp!==`intro${idx}`)render();}if(state.phase==='playing'){if(remaining(state)<=0&&!state.paused)commit({type:'TIMEOUT'});else updateClock();if(!state.paused&&!muted&&audio&&Date.now()-lastTheme>CONFIG.audio.themeIntervalMs){lastTheme=Date.now();CONFIG.audio.theme.forEach((f,i)=>tone(f,i*CONFIG.audio.themeSpacingSeconds,CONFIG.audio.themeDurationSeconds,CONFIG.audio.themeVolume));}}if(Date.now()-lastBroadcast>CONFIG.timing.snapshotMs){lastBroadcast=Date.now();broadcast();}}
function init(){document.title=CONFIG.title;Object.entries(CONFIG.colors).forEach(([key,value])=>document.documentElement.style.setProperty('--'+key,value));Object.entries(CONFIG.motion).forEach(([key,value])=>document.documentElement.style.setProperty('--motion-'+key,value+'s'));Object.entries(CONFIG.palette).forEach(([key,value])=>document.documentElement.style.setProperty('--'+key,value));if(IS_GM){document.title=copy("private_host_desk_2")+CONFIG.title;root.replaceChildren(gmPanel(null,true));add(root,el('p','gm-wait',U.waiting));setInterval(()=>{window.opener?.postMessage({app:SAVE_KEY,type:'HELLO'},'*');frame();},CONFIG.timing.heartbeatMs);window.opener?.postMessage({app:SAVE_KEY,type:'HELLO'},'*');return;}const errors=validateConfig();if(errors.length){add(root,el('main','selftest',copy("please_correct_config_before_playing")+errors.join(' ')));return;}state=EPHEMERAL?makeState():(load()||makeState());if(!EPHEMERAL){try{muted=localStorage.getItem(SAVE_KEY+'-mute')==='true';}catch(x){}}render();if(damaged!==null)showDialog(copy("your_saved_evening_is_safe"),U.damaged,[[copy("export_damaged_save"),()=>download('clockwork-damaged-save.txt',damaged,'text/plain')],[copy("start_a_fresh_round"),()=>{saveBlocked=false;damaged=null;history=[];future=[];state=makeState();overlay=null;save();render();}]]);setInterval(()=>{frame();if(toastUntil&&Date.now()>toastUntil){$('#notice')?.remove();toastUntil=0;}},CONFIG.timing.frameMs);}
// Read-only puzzle facts and deterministic test hooks are available for host QA.
window.Workshop={config:CONFIG,solve,reduce,validateState,validateConfig,makeState,elapsed,remaining,rankings,selftests,printModel,buildPrintPages,getState:()=>clone(state),dispatch:action=>commit(action),renderPrint:(size='a4',teams=CONFIG.teams,host=true)=>{root.replaceChildren();const r=el('main','print-room'),p=el('div','print-preview');buildPrintPages(size,teams,host).forEach(n=>p.append(n));add(r,p);root.append(r);},resetForTesting:opts=>{state=makeState(opts);history=[];future=[];render();},setStateForTesting:s=>{validateState(s);state=clone(s);render();}};
function paintMotes(now){if(state?.phase==='playing'&&!TOUR&&!printReturn)elapsed(state);const reduced=matchMedia(copy("prefers_reduced_motion_reduce")).matches;$$('.workshop-dust').forEach(c=>{const scale=Math.min(CONFIG.effects.maxPixelRatio,devicePixelRatio||1),stamp=innerWidth+'x'+innerHeight;if(c.dataset.viewport!==stamp){const r=c.getBoundingClientRect();c.width=Math.round(r.width*scale);c.height=Math.round(r.height*scale);c.dataset.viewport=stamp;}const g=c.getContext('2d');g.clearRect(0,0,c.width,c.height);const active=+(c.parentElement.dataset.progress||0),tick=reduced?0:now/1000;const zoom=Math.min(c.width/1400,c.height/820),ox=(c.width-1400*zoom)/2,oy=(c.height-820*zoom)/2;g.save();g.translate(ox,oy);g.scale(zoom,zoom);CONFIG.scene.gears.slice(0,Math.min(active,7)).forEach(([x,y,r],index)=>{g.save();g.translate(x,y);g.rotate(tick*Math.PI*2/CONFIG.motion.gear*(index%2?-1:1));const metal=g.createLinearGradient(-r,-r,r,r);metal.addColorStop(0,CONFIG.palette.cream);metal.addColorStop(.4,CONFIG.palette.gold);metal.addColorStop(1,CONFIG.colors.c036||CONFIG.palette.gold);g.fillStyle=metal;for(let tooth=0;tooth<12;tooth++){g.save();g.rotate(tooth*Math.PI/6);g.fillRect(-5,-r-7,10,16);g.restore();}g.beginPath();g.arc(0,0,r,0,Math.PI*2);g.fill();g.fillStyle=CONFIG.palette.ink;g.beginPath();g.arc(0,0,r*.56,0,Math.PI*2);g.fill();g.strokeStyle=CONFIG.palette.gold;g.lineWidth=4;for(let a=0;a<3;a++){g.save();g.rotate(a*Math.PI/3);g.beginPath();g.moveTo(-r*.68,0);g.lineTo(r*.68,0);g.stroke();g.restore();}g.fillStyle=CONFIG.palette.gold;g.beginPath();g.arc(0,0,6,0,Math.PI*2);g.fill();g.restore();});if(active===8){g.save();g.translate(700,302);g.strokeStyle=CONFIG.palette.pine;g.lineWidth=7;g.lineCap='round';g.rotate(tick*Math.PI*2/CONFIG.motion.clock);g.beginPath();g.moveTo(0,0);g.lineTo(0,-73);g.stroke();g.rotate(-tick*Math.PI*2/CONFIG.motion.clock*.9+1.5);g.beginPath();g.moveTo(0,0);g.lineTo(0,-55);g.stroke();g.restore();}g.restore();for(let i=0;i<CONFIG.effects.motes+active*CONFIG.effects.motesPerGear;i++){const x=((i*137.13+tick*(2+i%3))%c.width),y=((i*79.11-tick*(2+i%4))%c.height+c.height)%c.height;g.fillStyle=CONFIG.effects.moteColors[i%3?0:1];g.beginPath();g.arc(x,y,(i%3+1)*.45*scale,0,Math.PI*2);g.fill();}});requestAnimationFrame(paintMotes);}init();if(!IS_GM&&!TEST)requestAnimationFrame(paintMotes);
