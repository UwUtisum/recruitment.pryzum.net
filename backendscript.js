document.getElementById('feedbackForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const formData = new FormData(this);
	const name = formData.get('name');
	const email = formData.get('email');
	const feedback = formData.get('feedback');
	const timestamp = new Date().toISOString();

	const issueTitle = `Feedback from ${name} at ${timestamp}`;
	const issueBody = `**Name:** ${name}\n**Email:** ${email}\n**Feedback:**\n${feedback}\n**Submitted at:** ${timestamp}`;

	const issueUrl = `https://github.com/UwUtisum/recruitment.pryzum.net/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;

	const issueLinkContainer = document.getElementById('issueLinkContainer');
	const issueLink = document.getElementById('issueLink');
	issueLink.href = issueUrl;
	issueLinkContainer.style.display = 'block';
});