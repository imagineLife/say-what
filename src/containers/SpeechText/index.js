import React from 'react';
import './SpeechText.css';
import Section from '../../components/Section';
import {xNgetSpeechText} from './state/actions';
import {connect} from 'react-redux';

class SpeechText extends React.Component{
	constructor(props){
		super(props)
		this.speechID = "5a1f441aee30112b4312157d";
		//get speechID from url EVENTUALLY
	}


	componentDidMount(){
		this.speech = this.props.runSpeechTextAction(this.speechID);
	}

	render(){


		const sectionsArray =[
				{
					title: `Donald Trum 2017 Inaugural Address`,
					filePath: this.speechID,
					// img: `[ Image of Orator behind Title ]`,
					text: `Chief Justice Roberts, President Carter, President Clinton, President Bush, President Obama, fellow Americans, and people of the world, thank you. We the citizens of America are now joined in a great national effort to rebuild our country and restore its promise for all of our people. Together we will determine the course of America, and the world, for many, many years to come. We will face challenges. We will confront hardships, but we will get the job done.

		Every four years, we gather on these steps to carry out the orderly and peaceful transfer of power, and we are grateful to President Obama and First Lady Michelle Obama for their gracious aid throughout this transition. They have been magnificent. Thank you.

		Today's ceremony, however, has very special meaning, because today we are not merely transferring power from one administration to another, or from one party to another, but we are transferring power from Washington, D.C., and giving it back to you, the people.

		For too long, a small group in our nation's capital has reaped the rewards of government, while the people have borne the cost. Washington flourished, but the people did not share in its wealth. Politicians prospered, but the jobs left and the factories closed. The establishment protected itself, but not the citizens of our country. Their victories have not been your victories. Their triumphs have not been your triumphs, and while they celebrated in our nation's capital, there was little to celebrate for struggling families all across our land. That all changes, starting right here and right now, because this moment is your moment --- it belongs to you. It belongs to everyone gathered here today, and everyone watching, all across America. This is your day. This is your celebration, and this, the United States of America, is your country.
		What truly matters is not which party controls our government, but whether our government is controlled by the people. January 20th, 2017 will be remembered as the day the people became the rulers of this nation again. The forgotten men and women of our country, will be forgotten no longer. Everyone is listening to you now. You came by the tens of millions to become part of a historic movement, the likes of which the world has never seen before. At the center of this movement is a crucial conviction, that a nation exists to serve its citizens. Americans want great schools for their children, safe neighborhoods for their families, and good jobs for themselves. These are just and reasonable demands of righteous people and a righteous public, but for too many of our citizens a different reality exists. Mothers and children trapped in poverty in our inner cities, rusted out factories, scattered like tombstones across the across the landscape of our nation, an education system flush with cash, but which leaves our young and beautiful students deprived of all knowledge, and the crime, and the gangs, and the drugs that have stolen too many lives and robbed our country of so much unrealized potential. This American carnage stops right here and stops right now.

		We are one nation and their pain is our pain. Their dreams are our dreams and their success will be our success. We share one heart, one home, and one glorious destiny. The oath of office, I take today, is an oath of allegiance to all Americans. For many decades, we've enriched foreign industry at the expense of American industry, subsidized the armies of other countries, while allowing for the very sad depletion of our military. We've defended other nation's borders while refusing to defend our own. And spent trillions and trillions of dollars overseas, while America's infrastructure has fallen into disrepair and decay. We've made other countries rich while the wealth, strength and confidence of our country has dissipated over the horizon. One by one, the factories shuddered and left our shores, with not even a thought about the millions and millions of American workers that were left behind. The wealth of our middle class has been ripped from their homes and then redistributed all across the world.
		But that is the past, and now we are looking only to the future. We assembled here today our issuing a new decree to be heard in every city, in every foreign capital, and in every hall of power, from this day forward: a new vision will govern our land, from this day forward, it's going to be only America first. America first.

		Every decision on trade, on taxes, on immigration, on foreign affairs will be made to benefit American workers and American families. We must protect our borders from the ravages of other countries making our products, stealing our companies and destroying our jobs. Protection will lead to great prosperity and strength. I will fight for you with every breath in my body, and I will never, ever let you down. America will start winning again, winning like never before. We will bring back our jobs. We will bring back our borders. We will bring back our wealth, and we will bring back our dreams. We will build new roads and highways and bridges and airports and tunnels, and railways, all across our wonderful nation. We will get our people off of welfare and back to work, rebuilding our country with American hands and American labor.
		We will follow two simple rules: buy American, and hire American. We will seek friendship and goodwill with the nations of the world, but we do so with the understanding that it is the right of all nations to put their own interests first. We do not seek to impose our way of life on anyone, but rather to let it shine as an example. We will shine for everyone to follow. We will reinforce old alliances and form new ones, and you unite the civilized world against radical Islamic terrorism, which we will eradicate completely from the face of the Earth.
		At the bedrock of our politics will be a total allegiance to the United States of America, and through our loyalty to our country, we will rediscover our loyalty to each other. When you open your heart to patriotism, there is no room for prejudice. The Bible tells us, how good and pleasant it is when God's people live together in unity. We must speak our minds openly, debate our disagreements, but always pursue solidarity. When America is united, America is totally unstoppable. There should be no fear. We are protected, and we will always be protected. We will be protected by the great men and women of our military and law enforcement. And most importantly, we will be protected by God.

		Finally, we must think big and dream even bigger. In America, we understand that a nation is only living as long as it is striving. We will no longer accept politicians who are all talk and no action, constantly complaining but never doing anything about it. The time for empty talk is over. Now arrives the hour of action. Do not allow anyone to tell you that it cannot be done. No challenge can match the heart and fight and spirit of America. We will not fail. Our country will thrive and prosper again.

		We stand at the birth of a new millennium, ready to unlock the mysteries of space, to free the Earth from the miseries of disease and to harness the industries and technologies of tomorrow. A new national pride will stir our souls, lift our sights and heal our divisions. It's time to remember that old wisdom our soldiers will never forget, that whether we are black, or brown, or white, we all bleed the same red blood of patriots. We all enjoy the same glorious freedoms, and we all salute the same, great American flag. And whether a child is born in the urban sprawl of Detroit or the windswept plains of Nebraska, they look up at the at the same night sky, they fill their heart with the same dreams and they are infused with the breath of life by the same almighty creator.

		So to all Americans, in every city near and far, small and large, from mountain to mountain, from ocean to ocean, hear these words. You will never be ignored again. Your voice, your hopes, and your dreams will define our American destiny. And your courage and goodness and love, will forever guide us along the way. Together, we will make America strong again. We will make America wealthy again. We will make America proud again We will make America safe again, And yes, together, we will make we will make America great again. Thank you. God bless you. And god bless America. Thank you. God bless America.`,
					includeBottomSpace:true

				}
			];

			const sections = sectionsArray.map((sec,ind) => {
		      	return <Section key={ind} {...sec}/>;
			})


	    return (
			<main role="main">
		      
		      {sections}

		    </main>
	    );
	}
}

const mapDispatchToProps = (dispatch) =>
  ({
    runSpeechTextAction: (speechId) => { xNgetSpeechText(speechId, dispatch); }
  });

const mapStateToProps = (state, ownProps) =>
  ({});

export default connect(mapStateToProps, mapDispatchToProps)(SpeechText);