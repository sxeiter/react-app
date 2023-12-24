import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

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
		<>
			<h1>Заголовок</h1>
			<p>Какой-то текст</p>
			<Button />
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
		</>
	);
}

export default App;
