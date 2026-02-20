async function loadChannels() {
  const res = await fetch("https://kick.com/api/v2/channels");
  const data = await res.json();

  const container = document.getElementById("channels");

  data.data.slice(0, 10).forEach(channel => {
    const btn = document.createElement("button");
    btn.innerText = channel.slug;
    btn.onclick = () => openStream(channel.slug);
    container.appendChild(btn);
  });
}

async function openStream(slug) {
  const res = await fetch(`https://kick.com/api/v2/channels/${slug}`);
  const data = await res.json();
  document.getElementById("player").src = data.playback_url;
}

loadChannels();
