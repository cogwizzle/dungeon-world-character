import { html } from '../../utility/html-template'

export default html`<div id="player-moves">
  <h2 class="font-bold text-2xl">Player Moves</h2>
  <hr />
  <h3 class="flex-1 text-2xl medium mt-3">Basic Moves</h3>
  <div class="grid grid-cols-3 gap-3">
    <div class="col-span-full md:col-span-1">
      <h4 id="hack-and-slash" class="text-lg font-bold">Hack and Slash</h4>
      <p>
        When you attack an enemy in melee, roll+Str. On a 10+ you deal your
        damage to the enemy and avoid their attack. At your option, you may
        choose to do +1d6 damage but expose yourself to the enemy's attack. On a
        7-9, you deal your damage to the enemy and the enemy makes an attack
        against you.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="defy-danger" class="text-lg font-bold">Defy Danger</h4>
      <p>
        When you act despite an imminent threat or suffer a calamity, say how
        you deal with it and roll. If you do it...
      </p>
      <ul class="list-disc ml-5">
        <li>by powering through, +Str</li>
        <li>by getting out of the way or acting fast, +Dex</li>
        <li>by enduring, +Con</li>
        <li>with quick thinking, +Int</li>
        <li>through mental fortitude, +Wis</li>
        <li>sing charm and social grace, +Cha</li>
      </ul>
      <p>
        On a 10+, you do what you set out to, the threat doesn't come to bear.
        On a 7-9, you stumble, hesitate, or flinch: the GM will offer you a
        worse outcome, hard bargain, or ugly choice.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="discern-realities" class="text-lg font-bold">
        Discern Realities
      </h4>
      <p>
        When you closely study a situation or person, roll+Wis. On a 10+ ask the
        GM three questions from the list below. On a 7-9 ask only one. Take +1
        forward when acting on the answers.
      </p>
      <ul class="list-disc ml-5">
        <li>What happened here recently?</li>
        <li>What is about to happen?</li>
        <li>What should I be on the lookout for?</li>
        <li>What here is useful or valuable to me?</li>
        <li>Who's really in control here?</li>
        <li>What here is not what it appears to be?</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="volley" class="text-lg font-bold">Volley</h4>
      <p>
        When you take aim and shoot at an enemy at range, roll+Dex. On a 10+ you
        have a clear shot—deal your damage. On a 7-9, choose one (whichever you
        choose you deal your damage):
      </p>
      <ul class="list-disc ml-5">
        <li>
          You have to move to get the shot placing you in danger of the GM's
          choice
        </li>
        <li>You have to take what you can get: -1d6 damage</li>
        <li>You have to take several shots, reducing your ammo by one.</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="defend" class="text-lg font-bold">Defend</h4>
      <p>
        When you stand in defense of a person, item, or location under attack,
        roll+Con. On a 10+, hold 3. On a 7-9, hold 1. So long as you stand in
        defense, when you or the thing you defend is attacked you may spend
        hold, 1 for 1, to choose an option:
      </p>
      <ul class="list-disc ml-5">
        <li>Redirect an attack from the thing you defend to yourself</li>
        <li>Halve the attack's effect or damage</li>
        <li>
          Open up the attacker to an ally giving that ally +1 forward against
          the attacker
        </li>
        <li>Deal damage to the attacker equal to your level</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="spout-lore" class="text-lg font-bold">Spout Lore</h4>
      <p>
        When you consult your accumulated knowledge about something, roll+Int.
        On a 10+ the GM will tell you something interesting and useful about the
        subject relevant to your situation. On a 7-9 the GM will only tell you
        something interesting it's on you to make it useful. The GM might ask
        you “How do you know this?” Tell them the truth, now.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="parley" class="text-lg font-bold">Parley</h4>
      <p>
        When you have leverage on a GM character and manipulate them, roll+Cha.
        Leverage is something they need or want. On a hit they ask you for
        something and do it if you make them a promise first. On a 7-9, they
        need some concrete assurance of your promise, right now.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="aid-or-interfere" class="text-lg font-bold">Aid or Interfere</h4>
      <p>
        When you help or hinder someone you have a Bond with, roll+Bond with
        them. On a hit they take +1 or -2, your choice. On a 7-9 you also expose
        yourself to danger, retribution, or cost.
      </p>
    </div>
  </div>
  <h3 class="flex-1 text-2xl medium mt-3">Special Moves</h3>
  <hr />
  <div class="grid grid-cols-3 gap-3 px-2">
    <div class="col-span-full md:col-span-1">
      <h4 id="last-breath" class="text-lg font-bold">Last Breath</h4>
      <p>
        When you're dying you catch a glimpse of what lies beyond the Black
        Gates of Death's Kingdom (the GM will describe it). Then roll (just
        roll, +nothing—yeah, Death doesn't care how tough or cool you are). On a
        10+ you've cheated death— you're in a bad spot but you're still alive.
        On a 7-9 Death will offer you a bargain. Take it and stabilize or refuse
        and pass beyond the Black Gates into whatever fate awaits you. On a
        miss, your fate is sealed. You're marked as Death's own and you'll cross
        the threshold soon. The GM will tell you when.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="undertake-a-perilous-journey" class="text-lg font-bold">
        Undertake A Perilous Journey
      </h4>
      <p>
        When you travel through hostile territory, choose one member of the
        party to act as trailblazer, one to scout ahead, and one to be
        quartermaster (the same character cannot have two jobs). If you don't
        have enough party members or choose not to assign a job, treat that job
        as if it had rolled a 6. Each character with a job to do rolls+Wis. On a
        10+ the quartermaster reduces the number of rations required by one. On
        a 10+ the trailblazer reduces the amount of time it takes to reach your
        destination (the GM will say by how much). On a 10+ the scout will spot
        any trouble quick enough to let you get the drop on it. On a 7-9 each
        roles performs their job as expected: the normal number of rations are
        consumed, the journey takes about as long as expected, no one gets the
        drop on you but you don't get the drop on them either.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="end-of-session" class="text-lg font-bold">End of Session</h4>
      <p>
        When you reach the end of a session, choose one your bonds that you feel
        is resolved (completely explored, no longer relevant, or otherwise). Ask
        the player of the character you have the bond with if they agree. If
        they do, mark XP and write a new bond with whomever you wish. Once bonds
        have been updated look at your alignment. If you fulfilled that
        alignment at least once this session, mark XP. Then answer these three
        questions as a group:
      </p>
      <ul class="list-disc ml-5">
        <li>Did we learn something new and important about the world?</li>
        <li>Did we overcome a notable monster or enemy?</li>
        <li>Did we loot a memorable treasure?</li>
      </ul>
      <p>For each "yes" answer everyone marks XP.</p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="encumbrance" class="text-lg font-bold">Encumbrance</h4>
      <p>
        When you make a move while carrying weight up to or equal to Load,
        you're fine. When you make a move while carrying weight equal to load+1
        or load+2, you take -1. When you make a move while carrying weight
        greater than load+2, you have a choice: drop at least 1 weight and roll
        at -1, or automatically fail.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="recover" class="text-lg font-bold">Recover</h4>
      <p>
        When you do nothing but rest in comfort and safety after a day of rest
        you recover all your HP. After three days of rest you remove one
        debility of your choice. If you're under the care of a healer (magical
        or otherwise) you heal a debility for every two days of rest instead.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="level-up" class="text-lg font-bold">Level Up</h4>
      <p>
        When you have downtime (hours or days) and XP equal to (or greater than)
        your current level+7, subtract your current level +7 from your XP,
        increase your level by 1, and choose a new advanced move from your
        class. If you are the wizard, you also get to add a new spell to your
        spellbook. Choose one of your stats and increase it by 1 (this may
        change your modifier). Note that changing your Constitution increases
        your maximum and current HP. Ability scores can't go higher than 18.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="take-watch" class="text-lg font-bold">Take Watch</h4>
      <p>
        When you're on watch and something approaches the camp, roll+Wis. On a
        10+ you're able to wake the camp and prepare a response, the camp takes
        +1 forward. On a 7-9 you react just a moment too late; the camp is awake
        but hasn't had time to prepare. You have weapons and armor but little
        else. On a miss whatever lurks outside the campfire's light has the drop
        on you.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="carouse" class="text-lg font-bold">Carouse</h4>
      <p>
        When you return triumphant and throw a big party, spend 100 coin and
        roll + extra 100s of coin spent. On a 10+ choose 3. On a 7-9 choose 1.
        On a miss, you still choose one, but things get really out of hand.
      </p>
      <ul class="list-disc ml-5">
        <li>You befriend a useful NPC</li>
        <li>You hear rumors of an opportunity</li>
        <li>You gain useful information</li>
        <li>You are not entagngled, enscorcelled, or tricked</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="outstanding" class="text-lg font-bold">Outstanding Warrants</h4>
      <p>
        When you return to a civilized place in which you've caused trouble
        before, roll+Cha. On a hit, word has spread of your deeds and everyone
        recognizes you. On a 7-9, that, and, the GM chooses a complication:
      </p>
      <ul class="list-disc ml-5">
        <li>The local constabulary has a warrant out for your arrest</li>
        <li>Someone has put a price on your head</li>
        <li>
          Someon important to you has been put in a bad spot as a result of your
          actions
        </li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="bolster" class="text-lg font-bold">Bolster</h4>
      <p>
        When you spend your leisure time in study, meditation, or hard practice,
        you gain preparation. If you prepare for a week or two, 1 preparation.
        If you prepare for a month or longer, 3 preparation. When your
        preparation pays off spend 1 preparation for +1 to any roll. You can
        only spend one preparation per roll.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="recruit" class="text-lg font-bold">Recruit</h4>
      <p>
        When you put out word that you're looking to hire help, roll. If you
        make it known...
      </p>
      <ul class="list-disc ml-5">
        <li>...that your pay is generous, take +1</li>
        <li>...what you're setting out to do, take +1</li>
        <li>...that they'll get a share of whatever you find, take +1</li>
      </ul>
      <p>
        If you have a useful reputation around these parts take an additional
        +1. On a 10+ you've got your pick of a number of skilled applicants,
        your choice who you hire, no penalty for not taking them along. On a 7-9
        you'll have to settle for someone close or turn them away. On a miss
        someone influential and ill-suited declares they'd like to come along (a
        foolhardy youth, a loose-cannon, or a veiled enemy, for example), bring
        them and take the consequences or turn them away. If you turn away
        applicants you take -1 forward to Recruit.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="supply" class="text-lg font-bold">Supply</h4>
      <p>
        When you go to buy something with money on hand, if it's something
        readily available in the settlement you're in, you can buy it at market
        price. If it's something special, beyond what's usually available here,
        or non-mundane, roll+Cha. On a 10+ you find what you're looking for at a
        fair price. On a 7-9 you'll have to pay more or settle for something
        similar.
      </p>
    </div>
  </div>
</div>
<link rel="stylesheet" href="tailwind.css" />
`