import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './components/layouts/leftPanel/LeftPanel';
import Body from './components/layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';


function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафты',
			date: new Date()
		},
		{
			title: 'Поход в горы',
			text: 'Думал, что очень много времени',
			date: new Date()
		}
	];


  
	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							data={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							data={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm />
			</Body>
			
			
			
		</div>
	);
}

export default App;
