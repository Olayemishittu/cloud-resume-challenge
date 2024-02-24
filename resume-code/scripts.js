document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
    
        date: 'June 2023 - Present',
        company: 'American Express',
        title: 'Data Product Manager',
        description: 'Use analytical strategic perspective to identify trends and recommend solutions that improves user experience at American Express.'
    },
    {

        date: 'Aug 2021 - May 2023',
        company: 'Austin Peay State University',
        title: 'Graduate Teaching & Research Assistant',
        description: 'Analyzed & processed complex data sets using advanced querying, visualization & analytics tools in SQL BI tools.'
    },
    {
        date: 'Jan 2020– Aug 2021',
        company: 'Cardinal Stone Asset Management Ltd.',
        title: 'Business Intelligence Analyst',
        description: 'Increased customer engagement and retention by 41% by designing user demographic analytics that aids managers in product development.'
    },
    {
        date: 'July 2018 - Jan 2020',
        company: 'First Bank of Nigeria Ltd.',
        title: 'Data Engineer/Analyst',
        description: 'Improved Tableau dashboard utilization by 60% by incorporating customer feedback in improving data visualization.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
