<template>
  <div :class="$style.section">
    <div class="columns">
      <div class="column is-three-fifths is-offset-1">
        <div class="" :class="$style.Title">
          <samp :class="$style.box">
            Как мы работаем?
          </samp>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half is-offset-1">
        <div :class="$style.text">
          <ul>
            <li>
              <l>#1</l> 
              Ты оста&shy;вляешь контакты и с тобой связы&shy;вается наш препо&shy;даватель, вы догова&shy;риваетесь о интере&shy;сущей тебя теме и дате первого занятия
            </li>
            <br>
            <li>
              <l>#2</l>
              Оплата проис&shy;ходит после окончания занятия, стомость занятия рассчи&shy;тывается индиви&shy;дульно (в среднем <l>1-1,5 тыс. руб</l>)
            </li>
            <br>
            <li>
              <l>#3</l>
              Занятия про&shy;ходят уда&shy;ленно с помощью <a href="https://discord.com/"><T><u>Discord</u></T></a> и сер&shy;виса для сов&shy;мест&shy;ного редакти&shy;рования кода <a href="https://repl.it/"><T><u>Repl.it</u></T></a>
            </li>
            <br>
            <li>
              <l>#4</l>
              Наша цель заклю&shy;чается в том, чтобы через мини&shy;мальное кол-во занятий ты мог самосто&shy;ятельно про&shy;должать изучать программи&shy;рование
            </li>
            <br>
            <!-- <li>
              <l>#5</l>
              Cats
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>

.section {
  padding-top: 5.5rem;
  // padding-bottom: 1.5rem;

  background: none;

  @media (orientation: portrait) {
    background: #ffdd57;
  }
}

.Title {
  font-size: 4.5rem;
  color: #666666;
  line-height: 1.1;
  user-select: none;

	@media (orientation: portrait) {
		margin: 0rem 1rem 0rem 1rem;
    font-size: 2.6rem;
    text-align: left;
	}
}

.box {
  font-family: 'Rubik Mono One', sans-serif;
  word-spacing: -30px;
  letter-spacing: 0px;
  @media (orientation: portrait) {
    word-spacing: -15px;
  }
}

.text {
  color: #666666;
  margin: 1rem 1rem 1rem 1rem;
  font-size: 2.5rem;
  text-align: left;
  font-family: 'Rubik Mono One', sans-serif;
  word-spacing: -10px;
  letter-spacing: 0px;

  @media (orientation: portrait) {
    font-size: 1.5rem;
  }
}

li {
  border-radius: 4px;
  margin-left: -10px;
  line-height: 1.3;
  background: #fff;
  border: 5px solid #666666;
  padding: 1.5rem;

  @media (orientation: portrait) {
    padding: 1rem;
    margin-left: 0;
  }
}

</style>
