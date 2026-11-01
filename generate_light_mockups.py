import os
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches

OUTPUT_DIR = r'C:\Users\Sameer Khan\OneDrive\Desktop\demo\fix2ship-website\dist\assets\mockups'
os.makedirs(OUTPUT_DIR, exist_ok=True)

# POC Light Theme Color Palette
BEZEL_DECK = '#e2e8f0'       # Slate 200/300 laptop body
BEZEL_INNER = '#0f172a'      # Crisp dark display bezel
SCREEN_BG = '#F8FAFC'        # Slate 50 (exact body background of POC)
NAV_BG = '#FFFFFF'           # Crisp white header
CARD_BG = '#FFFFFF'          # White card
CARD_BORDER = '#E2E8F0'      # Slate 200 border
TEXT_TITLE = '#0F172A'       # Slate 900
TEXT_BODY = '#334155'        # Slate 700
TEXT_MUTED = '#64748B'       # Slate 500
TEXT_FAINT = '#94A3B8'       # Slate 400

# POC Accents
BRAND_INDIGO = '#4F46E5'     # Indigo 600
BRAND_INDIGO_BG = '#EEF2FF'  # Indigo 50
ACCENT_GREEN = '#10B981'     # Emerald 500
ACCENT_GREEN_BG = '#ECFDF5'  # Emerald 50
ACCENT_AMBER = '#F59E0B'     # Amber 500
ACCENT_AMBER_BG = '#FFFBEB'  # Amber 50
ACCENT_RED = '#EF4444'       # Rose 500
ACCENT_RED_BG = '#FEF2F2'    # Rose 50
ACCENT_CYAN = '#0EA5E9'      # Sky 500
ACCENT_CYAN_BG = '#F0F9FF'   # Sky 50
WHATSAPP_GREEN = '#25D366'

def build_light_laptop_frame(fig_w=12, fig_h=8, dpi=160, app_subtitle="GSTR-1 & 3B Filing Readiness"):
    fig, ax = plt.subplots(figsize=(fig_w, fig_h), dpi=dpi)
    fig.patch.set_facecolor('none')
    fig.patch.set_alpha(0.0)
    ax.set_facecolor('none')
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')

    # Laptop screen outer bezel (modern silver/slate frame)
    x, y, w, h = 0.08, 0.14, 0.84, 0.76
    bezel = patches.FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.015,rounding_size=0.025",
                                   facecolor='#0f172a', edgecolor='#cbd5e1', linewidth=2.5, zorder=2)
    ax.add_patch(bezel)

    # Inner display
    screen_x, screen_y = x + 0.02, y + 0.028
    screen_w, screen_h = w - 0.04, h - 0.045
    screen = patches.Rectangle((screen_x, screen_y), screen_w, screen_h, facecolor=SCREEN_BG, zorder=3)
    ax.add_patch(screen)

    # Laptop keyboard deck (silver sleek base)
    base_w = w + 0.10
    base_x = (1.0 - base_w) / 2
    base_y = y - 0.045
    base_h = 0.045
    base = patches.FancyBboxPatch((base_x, base_y), base_w, base_h, boxstyle="round,pad=0.008,rounding_size=0.015",
                                 facecolor='#cbd5e1', edgecolor='#94a3b8', linewidth=2, zorder=1)
    ax.add_patch(base)
    # Notch
    notch = patches.FancyBboxPatch((0.44, base_y + 0.032), 0.12, 0.010, boxstyle="round,pad=0.002,rounding_size=0.005",
                                  facecolor='#94a3b8', edgecolor='#64748b', linewidth=1, zorder=2)
    ax.add_patch(notch)

    # Header Bar (White with subtle border, like POC index.html header)
    bar_h = 0.052
    bar_y = screen_y + screen_h - bar_h
    app_bar = patches.Rectangle((screen_x, bar_y), screen_w, bar_h, facecolor=NAV_BG, edgecolor='#E2E8F0', linewidth=1, zorder=4)
    ax.add_patch(app_bar)

    # Window traffic lights
    ax.add_patch(patches.Circle((screen_x + 0.018, bar_y + bar_h/2), 0.005, facecolor='#ef4444', zorder=5))
    ax.add_patch(patches.Circle((screen_x + 0.032, bar_y + bar_h/2), 0.005, facecolor='#f59e0b', zorder=5))
    ax.add_patch(patches.Circle((screen_x + 0.046, bar_y + bar_h/2), 0.005, facecolor='#10b981', zorder=5))

    # Firm Brand Logo & Name (matching POC's "NSVM & Associates" header)
    logo_sq = patches.FancyBboxPatch((screen_x + 0.065, bar_y + 0.010), 0.032, 0.032,
                                     boxstyle="round,pad=0.002,rounding_size=0.006",
                                     facecolor='#0F172A', zorder=5)
    ax.add_patch(logo_sq)
    ax.text(screen_x + 0.081, bar_y + 0.026, "N", ha='center', va='center',
            fontsize=9.5, fontweight='bold', color='#FFFFFF', zorder=6)

    ax.text(screen_x + 0.108, bar_y + 0.033, "NSVM & Associates", fontsize=8.5, fontweight='bold', color=TEXT_TITLE, zorder=5)
    ax.text(screen_x + 0.108, bar_y + 0.016, "Tax Audit & Corporate Filing Desk", fontsize=6.5, color=TEXT_MUTED, zorder=5)

    # Search / Client Switcher Pill in center
    client_pill = patches.FancyBboxPatch((screen_x + screen_w*0.42, bar_y + 0.012), screen_w*0.28, 0.028,
                                         boxstyle="round,pad=0.002,rounding_size=0.006",
                                         facecolor='#F1F5F9', edgecolor='#E2E8F0', linewidth=0.8, zorder=5)
    ax.add_patch(client_pill)
    ax.text(screen_x + screen_w*0.44, bar_y + 0.026, "Client: Acme Logistics LLP (GST: 27AABCA1234F1Z5)",
            va='center', fontsize=6.8, color=TEXT_BODY, fontfamily='sans-serif', zorder=6)

    # Right: Verified Badge & Live Status
    pass_badge = patches.FancyBboxPatch((screen_x + screen_w - 0.16, bar_y + 0.012), 0.145, 0.028,
                                        boxstyle="round,pad=0.002,rounding_size=0.006",
                                        facecolor=ACCENT_GREEN_BG, edgecolor=ACCENT_GREEN, linewidth=1, zorder=5)
    ax.add_patch(pass_badge)
    ax.text(screen_x + screen_w - 0.087, bar_y + 0.026, "161 INVARIANTS PASS", ha='center', va='center',
            fontsize=6.5, fontweight='bold', color=ACCENT_GREEN, fontfamily='monospace', zorder=6)

    return fig, ax, screen_x, screen_y, screen_w, screen_h - bar_h


# --------------------------------------------------------------------------------------
# 1. Main Dashboard: Section 1 CTA Mockup
# (Replaces laptop-pipeline-dashboard.png in light theme)
# --------------------------------------------------------------------------------------
def generate_light_pipeline_dashboard():
    fig, ax, sx, sy, sw, sh = build_light_laptop_frame()

    main_x = sx + 0.02
    main_w = sw - 0.04
    main_y = sy + 0.02
    main_h = sh - 0.03

    # Section Title & Category Badge
    badge = patches.FancyBboxPatch((main_x, main_y + main_h - 0.035), 0.16, 0.024,
                                   boxstyle="round,pad=0.002,rounding_size=0.004",
                                   facecolor=BRAND_INDIGO_BG, edgecolor='#C7D2FE', linewidth=0.8, zorder=4)
    ax.add_patch(badge)
    ax.text(main_x + 0.01, main_y + main_h - 0.023, "INTAKE VERIFICATION", fontsize=6.5, fontweight='bold', color=BRAND_INDIGO, zorder=5)
    ax.text(main_x + 0.175, main_y + main_h - 0.023, "/  GSTR-1 & 3B READINESS", fontsize=6.5, color=TEXT_MUTED, zorder=5)

    ax.text(main_x, main_y + main_h - 0.075, "Client Document Completeness",
            fontsize=13, fontweight='bold', color=TEXT_TITLE, zorder=5)
    ax.text(main_x, main_y + main_h - 0.102, "All mandatory compliance ledgers cross-verified against statutory schema and filing period rules.",
            fontsize=7.2, color=TEXT_MUTED, zorder=5)

    # 3 Summary Cards (Exact POC style: White card, subtle border, large count)
    cards_data = [
        ("DOCUMENT READINESS", "14 of 14", "All Required Documents Present", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("PERIOD CONSISTENCY", "Q3 FY 2024-25", "No Trailing Month Slips", BRAND_INDIGO, BRAND_INDIGO_BG),
        ("RECONCILIATION VARIANCE", "Rs 0.00", "Books vs GSTR-2B vs Bank", ACCENT_CYAN, ACCENT_CYAN_BG),
    ]
    cw = (main_w - 0.03) / 3
    ch = 0.11
    cy = main_y + main_h - 0.235
    for i, (c_label, c_val, c_sub, c_col, c_bg) in enumerate(cards_data):
        cx = main_x + i * (cw + 0.015)
        card = patches.FancyBboxPatch((cx, cy), cw, ch, boxstyle="round,pad=0.004,rounding_size=0.008",
                                     facecolor=CARD_BG, edgecolor=CARD_BORDER, linewidth=1, zorder=4)
        ax.add_patch(card)
        ax.text(cx + 0.015, cy + ch - 0.025, c_label, fontsize=6.5, fontweight='bold', color=TEXT_MUTED, fontfamily='monospace', zorder=5)
        ax.text(cx + 0.015, cy + ch - 0.065, c_val, fontsize=12, fontweight='bold', color=TEXT_TITLE, zorder=5)

        # Pill badge
        p = patches.FancyBboxPatch((cx + 0.015, cy + 0.012), cw - 0.03, 0.022,
                                   boxstyle="round,pad=0.002,rounding_size=0.004",
                                   facecolor=c_bg, edgecolor=c_col, linewidth=0.6, zorder=5)
        ax.add_patch(p)
        ax.text(cx + 0.022, cy + 0.023, c_sub, fontsize=6.2, fontweight='bold', color=c_col, zorder=6)

    # Document Checklist Table (POC White Card Table)
    ty = main_y + 0.01
    th = cy - main_y - 0.02
    table_card = patches.FancyBboxPatch((main_x, ty), main_w, th, boxstyle="round,pad=0.004,rounding_size=0.008",
                                        facecolor=CARD_BG, edgecolor=CARD_BORDER, linewidth=1, zorder=4)
    ax.add_patch(table_card)

    ax.text(main_x + 0.015, ty + th - 0.035, "Verified Document Artifacts", fontsize=9, fontweight='bold', color=TEXT_TITLE, zorder=5)
    ax.text(main_x + main_w - 0.015, ty + th - 0.035, "SHA-256 Audit Trail Locked", ha='right', fontsize=7, color=TEXT_MUTED, fontfamily='monospace', zorder=5)

    headers = [("DOCUMENT CATEGORY", 0.02), ("SOURCE FILE", 0.28), ("PERIOD VERIFIED", 0.54), ("TIER STATUS", 0.74), ("SIGN-OFF", 0.90)]
    thy = ty + th - 0.075
    ax.add_patch(patches.Rectangle((main_x + 0.01, thy - 0.008), main_w - 0.02, 0.025, facecolor='#F8FAFC', zorder=5))
    for h_name, h_pos in headers:
        ax.text(main_x + main_w * h_pos, thy, h_name, fontsize=6.8, color=TEXT_MUTED, fontweight='bold', fontfamily='monospace', zorder=6)

    rows = [
        ("GSTR-2B Auto-Drafted ITC", "GSTR2B_Dec_Portal.json", "Dec 2024 (Q3)", "VERIFIED (100%)", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("Bank Statement (HDFC)", "HDFC_Current_0912.pdf", "Oct-Dec 2024", "PASS UNLOCKED", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("Sales Register (Tally)", "Sales_Tally_Export.xlsx", "Q3 FY 2024-25", "1,248 ROWS PARSED", BRAND_INDIGO, BRAND_INDIGO_BG),
        ("Purchase Register (Busy)", "Purchase_Bills_Zip.zip", "Q3 FY 2024-25", "OCR RECONCILED", ACCENT_CYAN, ACCENT_CYAN_BG),
        ("Form 26AS Tax Credit", "Form26AS_AY2526.pdf", "FY 2024-25", "MATCHED (Rs 0.01)", ACCENT_GREEN, ACCENT_GREEN_BG),
    ]
    ry = thy - 0.042
    for cat, fname, per, stat, col, bg_col in rows:
        ax.text(main_x + main_w * 0.02, ry, cat, fontsize=7.2, fontweight='bold', color=TEXT_TITLE, zorder=5)
        ax.text(main_x + main_w * 0.28, ry, fname, fontsize=7.0, color=TEXT_BODY, fontfamily='monospace', zorder=5)
        ax.text(main_x + main_w * 0.54, ry, per, fontsize=7.0, color=TEXT_MUTED, zorder=5)

        badge = patches.FancyBboxPatch((main_x + main_w * 0.74 - 0.005, ry - 0.006), 0.125, 0.020,
                                       boxstyle="round,pad=0.002,rounding_size=0.004",
                                       facecolor=bg_col, edgecolor=col, linewidth=0.8, zorder=5)
        ax.add_patch(badge)
        ax.text(main_x + main_w * 0.74, ry + 0.003, stat, fontsize=6.2, fontweight='bold', color=col, fontfamily='monospace', zorder=6)

        ax.text(main_x + main_w * 0.90, ry, "Passed [x]", fontsize=7.0, fontweight='bold', color=BRAND_INDIGO, zorder=5)
        ry -= 0.038

    out_path = os.path.join(OUTPUT_DIR, 'laptop-pipeline-dashboard.png')
    plt.savefig(out_path, bbox_inches='tight', transparent=True, dpi=160)
    plt.close()
    print(f"Generated Light: {out_path}")


# --------------------------------------------------------------------------------------
# 2. Features Matrix: Section 2 Feature Overview Mockup
# (Replaces laptop-features-matrix.png in light theme)
# --------------------------------------------------------------------------------------
def generate_light_features_matrix():
    fig, ax, sx, sy, sw, sh = build_light_laptop_frame()

    pw = (sw - 0.04) / 2
    ph = sh - 0.04
    py = sy + 0.02

    # Left Panel: Multi-Channel Client Intake (Light Clean Theme)
    px1 = sx + 0.015
    panel1 = patches.FancyBboxPatch((px1, py), pw, ph, boxstyle="round,pad=0.005,rounding_size=0.01",
                                    facecolor=CARD_BG, edgecolor=CARD_BORDER, linewidth=1.2, zorder=4)
    ax.add_patch(panel1)
    ax.text(px1 + 0.02, py + ph - 0.035, "CLIENT ZERO-DISRUPTION INTAKE", fontsize=8.5, fontweight='bold', color=TEXT_TITLE, zorder=5)
    ax.text(px1 + 0.02, py + ph - 0.065, "Accepts client documents in native format without portal logins", fontsize=6.8, color=TEXT_MUTED, zorder=5)

    intake_channels = [
        ("WhatsApp Document Drops", "Auto-unzips attachments, handles passwords & requests missing pages", "ACTIVE", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("Client Email Inboxes", "Direct PDF/Excel attachments parsed with immutable SHA-256 hash", "SYNCED", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("Tally ERP & Busy Connector", "Direct schema extraction for Sales & Purchase registers", "ONLINE", BRAND_INDIGO, BRAND_INDIGO_BG),
        ("GST Portal API Gateway", "Automated GSTR-1, 2A, 2B JSON ledger downloads", "CONNECTED", ACCENT_CYAN, ACCENT_CYAN_BG),
    ]
    cy = py + ph - 0.11
    for ch_title, ch_desc, ch_status, ch_color, ch_bg in intake_channels:
        box = patches.FancyBboxPatch((px1 + 0.015, cy - 0.045), pw - 0.03, 0.055,
                                     boxstyle="round,pad=0.003,rounding_size=0.006",
                                     facecolor='#F8FAFC', edgecolor='#E2E8F0', linewidth=0.8, zorder=5)
        ax.add_patch(box)
        ax.text(px1 + 0.025, cy - 0.015, ch_title, fontsize=7.5, fontweight='bold', color=TEXT_TITLE, zorder=6)
        ax.text(px1 + 0.025, cy - 0.035, ch_desc, fontsize=6.2, color=TEXT_MUTED, zorder=6)

        bd = patches.FancyBboxPatch((px1 + pw - 0.11, cy - 0.025), 0.09, 0.020,
                                    boxstyle="round,pad=0.002,rounding_size=0.004",
                                    facecolor=ch_bg, edgecolor=ch_color, linewidth=0.8, zorder=6)
        ax.add_patch(bd)
        ax.text(px1 + pw - 0.065, cy - 0.016, ch_status, ha='center', va='center', fontsize=6.2, fontweight='bold', color=ch_color, fontfamily='monospace', zorder=7)
        cy -= 0.07

    # Right Panel: Deterministic 3-Tier Rule Engine
    px2 = sx + 0.025 + pw
    panel2 = patches.FancyBboxPatch((px2, py), pw, ph, boxstyle="round,pad=0.005,rounding_size=0.01",
                                    facecolor=CARD_BG, edgecolor=CARD_BORDER, linewidth=1.2, zorder=4)
    ax.add_patch(panel2)
    ax.text(px2 + 0.02, py + ph - 0.035, "DETERMINISTIC VERIFICATION MATRIX", fontsize=8.5, fontweight='bold', color=TEXT_TITLE, zorder=5)
    ax.text(px2 + 0.02, py + ph - 0.065, "100% statutory rule checks - zero false-confidence AI hallucinations", fontsize=6.8, color=TEXT_MUTED, zorder=5)

    matrix_tiers = [
        ("Tier-1: Presence & Integrity", "14 categories verified | 0 corrupted sheets | Passwords resolved", "14/14 PASS", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("Tier-2: Period & Date Bounds", "FY 2024-25 Q3 bounds checked | 0 trailing month slips", "ALIGNED", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("Tier-3: 3-Way Reconciliation", "GSTR-2B vs Sales vs Bank | Rs 1.48Cr matched at Rs 0.01 tol", "MATCHED", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("Dual-Role Maker-Checker", "Article Assistant prepared -> Audit Senior approved", "APPROVED", BRAND_INDIGO, BRAND_INDIGO_BG),
    ]
    my = py + ph - 0.11
    for m_tier, m_desc, m_badge, m_color, m_bg in matrix_tiers:
        box = patches.FancyBboxPatch((px2 + 0.015, my - 0.045), pw - 0.03, 0.055,
                                     boxstyle="round,pad=0.003,rounding_size=0.006",
                                     facecolor='#F8FAFC', edgecolor='#E2E8F0', linewidth=0.8, zorder=5)
        ax.add_patch(box)
        ax.text(px2 + 0.025, my - 0.015, m_tier, fontsize=7.5, fontweight='bold', color=TEXT_TITLE, zorder=6)
        ax.text(px2 + 0.025, my - 0.035, m_desc, fontsize=6.2, color=TEXT_MUTED, zorder=6)

        bd = patches.FancyBboxPatch((px2 + pw - 0.11, my - 0.025), 0.09, 0.020,
                                    boxstyle="round,pad=0.002,rounding_size=0.004",
                                    facecolor=m_bg, edgecolor=m_color, linewidth=0.8, zorder=6)
        ax.add_patch(bd)
        ax.text(px2 + pw - 0.065, my - 0.016, m_badge, ha='center', va='center', fontsize=6.2, fontweight='bold', color=m_color, fontfamily='monospace', zorder=7)
        my -= 0.07

    out_path = os.path.join(OUTPUT_DIR, 'laptop-features-matrix.png')
    plt.savefig(out_path, bbox_inches='tight', transparent=True, dpi=160)
    plt.close()
    print(f"Generated Light: {out_path}")


# --------------------------------------------------------------------------------------
# 3. Reconciliation Grid: Section 4 Act-1 Mockup
# (Replaces laptop-reconciliation-grid.png in light theme)
# --------------------------------------------------------------------------------------
def generate_light_reconciliation_grid():
    fig, ax, sx, sy, sw, sh = build_light_laptop_frame()

    main_card = patches.FancyBboxPatch((sx + 0.015, sy + 0.015), sw - 0.03, sh - 0.03,
                                       boxstyle="round,pad=0.005,rounding_size=0.01",
                                       facecolor=CARD_BG, edgecolor=CARD_BORDER, linewidth=1.2, zorder=4)
    ax.add_patch(main_card)

    ax.text(sx + 0.03, sy + sh - 0.045, "STATUTORY 3-WAY RECONCILIATION AUDIT LEDGER",
            fontsize=9.5, fontweight='bold', color=TEXT_TITLE, zorder=5)

    stats = [
        ("TOTAL MATCHED", "Rs 1,48,24,912.40", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("STATUTORY TOLERANCE", "+/- Rs 0.01 STRICT", BRAND_INDIGO, BRAND_INDIGO_BG),
        ("AUTOMATED TRIAGE", "18 INVOICES MATCHED", ACCENT_CYAN, ACCENT_CYAN_BG),
        ("OUTSTANDING FLAGS", "0 FLAGS REMAINING", ACCENT_GREEN, ACCENT_GREEN_BG),
    ]
    stw = (sw - 0.08) / 4
    for i, (st_t, st_v, st_c, st_bg) in enumerate(stats):
        bx = sx + 0.03 + i * stw
        by = sy + sh - 0.12
        b = patches.FancyBboxPatch((bx, by), stw - 0.015, 0.06, boxstyle="round,pad=0.002,rounding_size=0.005",
                                   facecolor=st_bg, edgecolor=st_c, linewidth=0.8, zorder=5)
        ax.add_patch(b)
        ax.text(bx + 0.01, by + 0.04, st_t, fontsize=6.2, color=st_c, fontweight='bold', fontfamily='monospace', zorder=6)
        ax.text(bx + 0.01, by + 0.015, st_v, fontsize=8.5, color=TEXT_TITLE, fontweight='bold', zorder=6)

    # Table Header
    ty = sy + sh - 0.155
    ax.add_patch(patches.Rectangle((sx + 0.03, ty - 0.01), sw - 0.06, 0.024, facecolor='#F1F5F9', zorder=5))
    cols = [("GSTIN", 0.02), ("VENDOR NAME", 0.22), ("INV NUMBER", 0.46), ("GSTR-2B ITC", 0.62), ("BOOKS VALUE", 0.76), ("AUDIT STATUS", 0.90)]
    for c_title, c_pos in cols:
        ax.text(sx + 0.03 + (sw - 0.06) * c_pos, ty, c_title, fontsize=6.8, color=TEXT_MUTED, fontweight='bold', fontfamily='monospace', zorder=6)

    line_items = [
        ("27AABCS1429B1Z8", "Infra Steel Supplies Ltd", "INV-2024-8921", "Rs 18,42,100.00", "Rs 18,42,100.00", "EXACT MATCH"),
        ("29AAACK5521R1ZC", "Cloud Hosting Services India", "CHS/BLR/9402", "Rs 4,12,380.00", "Rs 4,12,380.00", "EXACT MATCH"),
        ("07AAACG8812L1ZV", "Delhi Freight & Logistics Corp", "DFL-90412", "Rs 9,64,200.00", "Rs 9,64,200.00", "EXACT MATCH"),
        ("33AAACB9924K1ZT", "Precision Electronics Chennai", "PEC/24/091", "Rs 12,50,000.00", "Rs 12,50,000.00", "EXACT MATCH"),
        ("24AAACE7714M1Z2", "Gujarat Chemical Dist LLP", "GCD-11029", "Rs 24,15,450.00", "Rs 24,15,450.00", "EXACT MATCH"),
        ("36AAACR3319P1ZW", "Hyderabad Industrial Pack", "HIP-84920", "Rs 3,18,920.00", "Rs 3,18,920.00", "EXACT MATCH"),
    ]
    ly = ty - 0.038
    for gstin, vname, inv, v2b, vbooks, status in line_items:
        ax.text(sx + 0.03 + (sw - 0.06) * 0.02, ly, gstin, fontsize=7.0, color=TEXT_TITLE, fontfamily='monospace', zorder=5)
        ax.text(sx + 0.03 + (sw - 0.06) * 0.22, ly, vname, fontsize=7.0, color=TEXT_TITLE, fontweight='bold', zorder=5)
        ax.text(sx + 0.03 + (sw - 0.06) * 0.46, ly, inv, fontsize=7.0, color=TEXT_MUTED, fontfamily='monospace', zorder=5)
        ax.text(sx + 0.03 + (sw - 0.06) * 0.62, ly, v2b, fontsize=7.0, color=TEXT_BODY, fontfamily='monospace', zorder=5)
        ax.text(sx + 0.03 + (sw - 0.06) * 0.76, ly, vbooks, fontsize=7.0, color=TEXT_BODY, fontfamily='monospace', zorder=5)

        s_badge = patches.FancyBboxPatch((sx + 0.03 + (sw - 0.06) * 0.90 - 0.008, ly - 0.006), 0.085, 0.018,
                                         boxstyle="round,pad=0.002,rounding_size=0.004",
                                         facecolor=ACCENT_GREEN_BG, edgecolor=ACCENT_GREEN, linewidth=0.8, zorder=5)
        ax.add_patch(s_badge)
        ax.text(sx + 0.03 + (sw - 0.06) * 0.90, ly + 0.002, status, fontsize=6.2, color=ACCENT_GREEN, fontweight='bold', fontfamily='monospace', zorder=6)
        ly -= 0.035

    out_path = os.path.join(OUTPUT_DIR, 'laptop-reconciliation-grid.png')
    plt.savefig(out_path, bbox_inches='tight', transparent=True, dpi=160)
    plt.close()
    print(f"Generated Light: {out_path}")


# --------------------------------------------------------------------------------------
# 4. Maker-Checker: Section 4 Act-2 Mockup
# (Replaces laptop-maker-checker.png in light theme)
# --------------------------------------------------------------------------------------
def generate_light_maker_checker():
    fig, ax, sx, sy, sw, sh = build_light_laptop_frame()

    pw = (sw - 0.04) / 2
    ph = sh - 0.04
    py = sy + 0.02

    # Left: Client WhatsApp Bot Dialog (Light WhatsApp-styled bubbles)
    px1 = sx + 0.015
    panel1 = patches.FancyBboxPatch((px1, py), pw, ph, boxstyle="round,pad=0.005,rounding_size=0.01",
                                    facecolor='#EFEAE2', edgecolor='#CBD5E1', linewidth=1.2, zorder=4)
    ax.add_patch(panel1)

    # WhatsApp Chat Header
    ax.add_patch(patches.Rectangle((px1, py + ph - 0.05), pw, 0.05, facecolor='#075E54', zorder=5))
    ax.text(px1 + 0.02, py + ph - 0.026, "fix2ship Intake Bot - Acme Logistics LLP", fontsize=7.5, fontweight='bold', color='#FFFFFF', zorder=6)

    chats = [
        ("BOT", "Hello! Detected password on HDFC statement 'Bank_Dec.pdf'. Reply with password or PAN.", False),
        ("CLIENT", "It is ABCD1234E - thank you!", True),
        ("BOT", "Password verified and encrypted. Missing page 3 of bill #429. Please share scan.", False),
        ("CLIENT", "[Sent Photo: bill_page3.jpg]", True),
        ("BOT", "Page 3 OCR verified. All 14 files for Q3 pack are complete! Thank you.", False),
    ]
    chy = py + ph - 0.09
    for sender, msg, is_client in chats:
        msg_w = pw * 0.78
        bx = px1 + (pw - msg_w - 0.02) if is_client else px1 + 0.02
        bg_col = '#D9FDD3' if is_client else '#FFFFFF'
        b = patches.FancyBboxPatch((bx, chy - 0.045), msg_w, 0.052, boxstyle="round,pad=0.003,rounding_size=0.006",
                                   facecolor=bg_col, edgecolor='#E2E8F0', linewidth=0.8, zorder=5)
        ax.add_patch(b)
        ax.text(bx + 0.01, chy - 0.016, f"{sender}: {msg[:40]}", fontsize=6.5, color=TEXT_TITLE, fontweight='bold', zorder=6)
        if len(msg) > 40:
            ax.text(bx + 0.01, chy - 0.033, msg[40:], fontsize=6.2, color=TEXT_BODY, zorder=6)
        chy -= 0.065

    # Right: Role-Based Maker-Checker Sign-off
    px2 = sx + 0.025 + pw
    panel2 = patches.FancyBboxPatch((px2, py), pw, ph, boxstyle="round,pad=0.005,rounding_size=0.01",
                                    facecolor=CARD_BG, edgecolor=CARD_BORDER, linewidth=1.2, zorder=4)
    ax.add_patch(panel2)
    ax.text(px2 + 0.02, py + ph - 0.035, "ROLE-BASED MAKER-CHECKER DISPOSITION", fontsize=8.5, fontweight='bold', color=TEXT_TITLE, zorder=5)
    ax.text(px2 + 0.02, py + ph - 0.065, "Enforces strict ICAI SQC 1 segregation of preparation and partner audit review", fontsize=6.5, color=TEXT_MUTED, zorder=5)

    roles = [
        ("MAKER: Articled Assistant (Karan Joshi)", "Prepared: Ingestion, OCR checks, Tier-1 & Tier-2 validation complete", "SUBMITTED FOR REVIEW", BRAND_INDIGO, BRAND_INDIGO_BG),
        ("CHECKER: Audit Senior (Neha Verma, CA)", "Verified: 3-Way tolerance checked, 18 invoices matched to GSTR-2B", "CHECKED & PASSED", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("SIGN-OFF: Managing Partner (Rajesh Sharma, FCA)", "Approved: SHA-256 Audit Pack locked. Ready for GSTR-1 & 3B upload", "FINAL SIGN-OFF LOCKED", ACCENT_CYAN, ACCENT_CYAN_BG),
    ]
    ry = py + ph - 0.12
    for r_title, r_desc, r_badge, r_col, r_bg in roles:
        box = patches.FancyBboxPatch((px2 + 0.015, ry - 0.065), pw - 0.03, 0.075,
                                     boxstyle="round,pad=0.003,rounding_size=0.006",
                                     facecolor='#F8FAFC', edgecolor='#E2E8F0', linewidth=0.8, zorder=5)
        ax.add_patch(box)
        ax.text(px2 + 0.025, ry - 0.018, r_title, fontsize=7.5, fontweight='bold', color=TEXT_TITLE, zorder=6)
        ax.text(px2 + 0.025, ry - 0.038, r_desc, fontsize=6.2, color=TEXT_MUTED, zorder=6)

        bd = patches.FancyBboxPatch((px2 + 0.025, ry - 0.060), 0.19, 0.018,
                                    boxstyle="round,pad=0.002,rounding_size=0.004",
                                    facecolor=r_bg, edgecolor=r_col, linewidth=0.8, zorder=6)
        ax.add_patch(bd)
        ax.text(px2 + 0.030, ry - 0.052, r_badge, fontsize=6.0, color=r_col, fontweight='bold', fontfamily='monospace', zorder=7)
        ry -= 0.095

    out_path = os.path.join(OUTPUT_DIR, 'laptop-maker-checker.png')
    plt.savefig(out_path, bbox_inches='tight', transparent=True, dpi=160)
    plt.close()
    print(f"Generated Light: {out_path}")


# --------------------------------------------------------------------------------------
# 5. Live Demo Walkthrough: Section 5 Mockup
# (Replaces laptop-demo-walkthrough.png in light theme)
# --------------------------------------------------------------------------------------
def generate_light_demo_preview():
    fig, ax, sx, sy, sw, sh = build_light_laptop_frame()

    # Video display inside laptop
    vid_bg = patches.Rectangle((sx + 0.015, sy + 0.015), sw - 0.03, sh - 0.03,
                               facecolor='#F8FAFC', edgecolor=CARD_BORDER, linewidth=1, zorder=4)
    ax.add_patch(vid_bg)

    # Subtle grid accent
    for i in range(16):
        ax.axline((sx + 0.02 + i * 0.05, sy), slope=0.5, color='#E2E8F0', alpha=0.6, linewidth=1, zorder=4)

    cx = sx + sw / 2
    cy = sy + sh / 2

    # Play Button Circle in center (Indigo accent like POC)
    ax.add_patch(patches.Circle((cx, cy + 0.02), 0.055, facecolor=BRAND_INDIGO, edgecolor='#818CF8', linewidth=2.5, zorder=6))
    ax.add_patch(patches.Polygon([[cx - 0.015, cy + 0.045], [cx - 0.015, cy - 0.005], [cx + 0.025, cy + 0.02]],
                                 closed=True, facecolor='#FFFFFF', zorder=7))

    ax.text(cx, cy - 0.07, "LIVE 60-SECOND POC WALKTHROUGH", ha='center', fontsize=12, fontweight='bold', color=TEXT_TITLE, zorder=6)
    ax.text(cx, cy - 0.11, "From Messy Client Upload to Audit-Ready GSTR Filing Pack with 161 Passing Invariants",
            ha='center', fontsize=7.8, color=BRAND_INDIGO, fontfamily='monospace', zorder=6)

    # 3 POC Badges at bottom
    badges = [
        ("Step 1: WhatsApp Ingestion", ACCENT_GREEN, ACCENT_GREEN_BG),
        ("Step 2: Tier 1-3 Rule Engine", BRAND_INDIGO, BRAND_INDIGO_BG),
        ("Step 3: Partner 1-Click Export", ACCENT_CYAN, ACCENT_CYAN_BG),
    ]
    bw = 0.22
    for i, (b_txt, b_col, b_bg) in enumerate(badges):
        bx = sx + 0.08 + i * (bw + 0.04)
        b = patches.FancyBboxPatch((bx, sy + 0.035), bw, 0.035, boxstyle="round,pad=0.002,rounding_size=0.006",
                                   facecolor=b_bg, edgecolor=b_col, linewidth=1, zorder=5)
        ax.add_patch(b)
        ax.text(bx + bw/2, sy + 0.052, b_txt, ha='center', va='center', fontsize=7.0, color=b_col, fontweight='bold', zorder=6)

    out_path = os.path.join(OUTPUT_DIR, 'laptop-demo-walkthrough.png')
    plt.savefig(out_path, bbox_inches='tight', transparent=True, dpi=160)
    plt.close()
    print(f"Generated Light: {out_path}")

generate_light_pipeline_dashboard()
generate_light_features_matrix()
generate_light_reconciliation_grid()
generate_light_maker_checker()
generate_light_demo_preview()
