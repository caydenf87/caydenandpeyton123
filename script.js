alert("Hello, this is a project I have created in order to raise awareness of underrepresentation in STEM fields. " +
"It is important to note that all of the articles used in this page talk about the intersectionality of gender, " +
"however the articles only studied males and females. I would have liked the articles to discuss more aspects " +
"of gender when it comes to STEM, but more studies need to be done for this.");

let num = 1;

let microOne = 'Proctor et al. (2017) claim, "African American students in Solórzano et al. (2000) reported '  +
"experiencing microinsults both inside (e.g., feeling invisible and "  +
"perceiving faculty as having low academic expectations for them) and "  +
"outside (e.g., assumptions that they will engage in criminal behaviors "  +
"in public spaces on campus) of the classroom. Similarly, both Black "  +
"females and males in McCabe (2009) experienced microinsults while "  +
"attending a PWI. Black females reported experiencing these racial "  +
"microaggressions the most within the classroom, which resulted in "  +
"them feeling both hypervisible (being expected to be the spokesperson "  +
"for their race and gender) and invisible (contributions not being "  +
"recognized). Black males experienced racial microaggressions that "  +
"suggested others within the college campus viewed them as threats and "  +
"likely to commit crime (McCabe 2009). As a consequence, Black male "  +
"participants reported that campus police aimed to control their bodies "  +
'and activities" (p.358).';

let microTwo = '"Proctor et al. (2017) claim, Like Black college students, Latino/a students attending PWIs report ' +
 "higher frequencies of racial microaggressions related to others " +
 "assuming that they have lower intelligence, but Latino/a students " +
 "also report higher frequencies of racial microaggressions " +
 "characterized by others viewing them as exotic or verbalizing " +
 "ethnic stereotypes about them (ForrestBank and Jenson 2015). For " +
 "instance, Latina students in McCabe (2009) reported that White " +
 "males perceived them as exotic and often sexualized them. Yet, the " +
 "type of racial microaggressions Latino/a students experience may " +
 "differ by the characteristics of a higher education institution. " +
 "For Contemp School Psychol (2018) 22:355-368 357 example, Palmer " +
 "and Maramba (2015) explored the experiences of Latino/a students " +
 "attending a historically Black college. Their participants reported " +
 "experiencing open and hostile microassaults from Black peers, " +
 "including being teased due to their ethnicity, enduring stares, and " +
 "hearing hostile comments regarding their presence on campus. Latino/a " +
 "students attributed their peers' microaggressive behavior, in part, " +
 'to stereotypic views they held of Latino/a people" (p.358).'

let microThree = 'Proctor et al. (2017) claim, "In relation to Asian American students, Palmer and Maramba (2015) ' +
"found that they experienced microinsults related to the model minority " +
"myth, which suggests that Asian Americans should be successful and " +
"highly educated in the USA. More specifically, Asian American students " +
"reported that their peers assumed they were good at math and science. " +
"Consequently, they were often invited to participate in study groups " +
"and asked to assist peers with math and science assignments. The " +
"finding that Asian American college students experience microinsults " +
"is consistent with previous research (Maramba and Museus 2013; Ong " +
"et al. 2013). However, previous research highlights that Asian " +
"American college students also experience microinvalidations such " +
"as others assuming that they are foreign born or not an American " +
'citizen and do not speak English well (Sue et al. 2007b)" (p.358).'

function changePara()
{
    let area = document.getElementById("microagressions")
    if (num == 1)
    {
        area.innerText = microTwo;
        num = 2
    }

    else if (num == 2)
    {
        area.innerText = microThree;
        num = 3
    }

    else if (num == 3)
    {
        area.innerText = microOne;
        num = 1;
    }
}