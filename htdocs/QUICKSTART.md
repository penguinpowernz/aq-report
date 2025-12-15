# Quick Start - AQ Intelligence Dashboard

## Fastest Way to Run

```bash
cd /home/robert/src/golang/src/github.com/penguinpowernz/aq-report/htdocs
sudo ./START.sh
```

Then open: **http://localhost**

## Manual nginx Setup (if START.sh doesn't work)

```bash
# 1. Copy and edit config
sudo cp nginx.conf.example /etc/nginx/sites-available/aq-report
sudo nano /etc/nginx/sites-available/aq-report
# Make sure the 'root' path points to this htdocs directory

# 2. Enable site
sudo ln -s /etc/nginx/sites-available/aq-report /etc/nginx/sites-enabled/

# 3. Test and restart
sudo nginx -t
sudo systemctl restart nginx

# 4. Open browser
firefox http://localhost
```

## File Structure

```
htdocs/
├── index.html          # Main page - start here
├── css/                # Styles
├── js/
│   ├── main.js         # Navigation
│   └── modules/        # Each section
├── images/diagrams/    # Graphviz charts
└── README.md           # Full documentation
```

## Modifying Sections

Want to update the funding data?

```bash
nano js/modules/funding.js
# Make changes, save
# Reload browser - changes appear immediately
```

Each section is independent:
- `locations.js` - Geographic data
- `hierarchy.js` - Org structure
- `timeline.js` - Historical events
- `attacks.js` - Past & predicted attacks
- `funding.js` - Money flows
- `propaganda.js` - Info warfare
- `refugees.js` - Migration routes

## Regenerating Diagrams

```bash
cd images/diagrams
dot -Tpng islamic-army-hierarchy.dot -o islamic-army-hierarchy.png
dot -Tpng funding-flow.dot -o funding-flow.png
dot -Tpng migration-routes.dot -o migration-routes.png
```

## What You'll See

- **Overview** - Critical stats: 1,000+ terrorists, $44-87M weekly, 50K casualties predicted
- **Locations** - 30 training camps, Kandahar hub, Darien Gap route
- **Hierarchy** - Islamic Army structure, Hamza bin Laden command
- **Timeline** - 1979 → 2025 predictions
- **Attacks** - Benghazi, Abbey Gate, October 7th, 2025 predictions
- **Funding** - U.S. → Taliban → Al-Qaeda flow diagram
- **Propaganda** - "U.S. funded attack" narrative
- **Refugees** - Afghan passport exploitation, $5M/month fraud

## Troubleshooting

**nginx won't start:**
```bash
sudo nginx -t  # Check for errors
sudo systemctl status nginx  # See what's wrong
```

**Can't access http://localhost:**
```bash
# Try your IP instead
ip addr show | grep inet
# Then use http://YOUR_IP
```

**Permission denied:**
```bash
# Make sure nginx config points to this directory
# And user running nginx has read permissions
sudo chmod -R 755 /home/robert/src/golang/src/github.com/penguinpowernz/aq-report/htdocs
```

## Next Steps

1. **Read README.md** for complete documentation
2. **Explore sections** by clicking navigation links
3. **Review diagrams** in images/diagrams/
4. **Modify as needed** - each module is independent

## Key Intelligence

- **120,000** trained Islamic Army fighters
- **$2.3-4.5B** annually from U.S. to terrorists
- **1,000+** terrorists deployed for U.S. attack
- **50,000-60,000** predicted American casualties
- **2025** attack window (Spring-Fall)
- **7 of 8** weekly payment recipients are designated terrorists

All data from Sarah Adams (former CIA) interviews on Shawn Ryan Show.

---

**Questions?** See README.md
**Issues?** Check nginx logs: `sudo tail -f /var/log/nginx/error.log`
