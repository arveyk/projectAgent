<h3>slack builder block kit:</h3>
---
***test-bot***
	webook url: https://utilitysolutional.app.n8n.cloud/webhook/cea5d232-2417-4d09-ab33-29a802963071/webhook>
	usage: For new message received in channel
	application: 	in Event Subscription -> Enable Event -> Request URL
	-- Event Subs --
		Under Subscribe to bot events
		app_mention, message.channels(This is relevant for the trigger set up)
	bot: test-bot
	distributed: publicly dist.

	-- Scopes --
	bot: app_mentions:read, channels:history, channels:read, chat:write, commands(this is for slash commands), files:read, files:write, groups:history, groups:read, im:history, im:read, im: write, mpim:read, users:read
---
<h3>slack Automate tests</h3>
---
***temp bot***
	/tempest command
		url: https://utilitysolutional.app.n8n.cloud/webhook/c32064ec-4732-4658-b4ec-f413f7f48b7b ++From webhook below++

	webhook url(production): https://utilitysolutional.app.n8n.cloud/webhook/c32064ec-4732-4658-b4ec-f413f7f48b7b
	-- Scopes --
	bot: app_mentions:read, assistant:write, channels:history, channels:read, chat:write, chat:write.customize(For bot to send msgs on you behalf), commands(this is for slash commands), files:read, files:read, files:write, groups:history, groups:read, im:history, mpim:history, mpim:read, users:read
	user: chat:write(I think you only need this one), users:read		
