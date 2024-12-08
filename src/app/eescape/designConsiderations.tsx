import { Fragment } from "react";
import Section from "~/components/section";

const data = [{
  title: "Dealing with both mental problems and eating behavioral problems is important",
  description: "All experts highlighted that interventions for emotional eating should address both the emotional problem and the eating behavior.",
  comments: [
    {
      text: '“In the case of eating behavior problems, underlying psychological and environ-mental issues should be addressed, along with the eating behavior itself.”',
      speaker: 'Eating disoder expert'
    },
    { text: 'All design workshop participants sought a place that made them feel calm and consolation to alleviate the emotions causing late-night eating.' }
  ]
}, {
  title: "Reducing emotional bonds on food is essential",
  description: "Emotional eaters attach meanings to food. These emotional bonds to food make them repeat emotion-al eating.",
  comments: [
    {
      text: '“Emotional eaters tend to have emo-tional attachments to food.”',
      speaker: 'Eating disoder expert'
    },
    {
      text: '“Food is a comforting friend to me.”',
      speaker: 'P9'
    },
    {
      text: '“I seek out foods as a reward for my hard day.”',
      speaker: 'P1'
    },
    {
      text: '“Food is my escape where I can take a break from tasks for a while.”',
      speaker: 'P6'
    }
  ],
}, {
  title: "Intervention to immediately alleviate cravings is needed",
  description: "Emotional eaters prefer instant or delivery foods that are ready to eat without cooking. The service should intervene immediately before their appetite leads to actual eating.",
  comments: [
    {
      text: 'All emotional night eaters who answered our survey preferred quickly and easily prepared foods.',
      speaker: 'P2'
    },
    {
      text: '“Prevent binge eating by resisting the urge to craving for even five minutes.”',
      speaker: 'Eating disoder expert'
    },
    {
      text: '“Wearing a VR headset is very effective at blocking out the craving for food in real world.”',
      speaker: 'Eating disoder expert'
    }
  ]
}]

export default function DesignConsiderations() {
  return (
    <Section subtitle="DESIGN CONSIDERATIONS">
      <div className="grid grid-cols-3 grid-rows-[auto_auto_auto] grid-flow-col gap-3">
        {
          data.map((item, index) => (
            <Fragment key={index}>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-[#CDD5FF] text-sm">{item.description}</p>
              <ul className="flex flex-col gap-3">
                {
                  item.comments.map((comment, index) => (
                    <li key={index} className="bg-[#262C4F] p-7 pb-2 rounded-lg">
                      <p>{comment.text}</p>
                      <p className="text-end text-[#8094FF]">{comment.speaker}</p>
                    </li>
                  ))
                }
              </ul>
            </Fragment>
          ))
        }
      </div>
    </Section>
  );
}
