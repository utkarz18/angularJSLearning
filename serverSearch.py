import wx

class MainWindow(wx.Frame):

    def __init__(self, parent, id, title):
        wx.Frame.__init__(self, parent, id, title, size=(800, 600))
        panel = wx.Panel(self)

        cred_txt = wx.StaticText(panel, -1, "Server Credentials:", pos = (20,10))
        cred_txt.SetFont(wx.Font(20, wx.DECORATIVE, wx.NORMAL, wx.NORMAL))

        font_txt = wx.Font(12, wx.DECORATIVE, wx.NORMAL, wx.NORMAL)
        font_entry = wx.Font(10, wx.DECORATIVE, wx.NORMAL, wx.NORMAL)

        #ip address
        ip_txt = wx.StaticText(panel, -1, "IP Address", pos = (22, 60))
        ip_txt.SetFont(font_txt)
        ip_entry = wx.TextCtrl(panel, pos = (108, 58), size=(180,24))
        ip_entry.SetFont(font_entry)

        #username
        username_txt = wx.StaticText(panel, -1, "Username", pos = (23, 100))
        username_txt.SetFont(font_txt)
        username_entry = wx.TextCtrl(panel, pos = (108, 95), size=(180,24))
        username_entry.SetFont(font_entry)

        #password
        password_txt = wx.StaticText(panel, -1, "Password", pos = (305, 100))
        password_txt.SetFont(font_txt)
        password_entry = wx.TextCtrl(panel, pos = (385, 95), size=(180,24), style = wx.TE_PASSWORD)
        password_entry.SetFont(font_entry)

        #login button
        login_btn = wx.Button(panel, -1, "Login", pos = (600,81), size = (100,40))
        login_btn.SetBackgroundColour(wx.Colour(27, 114, 40))
        login_btn.SetForegroundColour("white")
        login_btn.SetFont(font_txt)
        
if __name__ == '__main__':
    app = wx.App()
    frame = MainWindow(None, -1, "Server Search")
    frame.Show()
    app.MainLoop()
